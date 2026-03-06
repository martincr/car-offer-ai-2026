'use client';

import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { Divider } from '@/components/ui/Divider';
import { Input } from '@/components/ui/Input';
import { Progress } from '@/components/ui/Progress';
import { Textarea } from '@/components/ui/Textarea';
import { LeadDraft, Condition, ExistingOfferSource } from '@/lib/types';
import { cleanVin, formatPhone, isValidVin } from '@/lib/validators';
import { ChatAgent } from '@/components/sell/ChatAgent';
import { PhotoPicker } from '@/components/sell/PhotoPicker';

type Mode = 'quick' | 'chat';

const TOTAL_STEPS = 8;

function emptyDraft(initialVin?: string): LeadDraft {
  return {
    vin: initialVin ? cleanVin(initialVin) : '',
    contact: {},
    existingOffer: { source: 'None' },
  };
}

async function fileToDataUrl(file: File): Promise<string> {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

export function SellFlow({ initialVin }: { initialVin?: string }) {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('quick');
  const [step, setStep] = useState<number>(0);
  const [draft, setDraft] = useState<LeadDraft>(() => emptyDraft(initialVin));
  const [vinLoading, setVinLoading] = useState(false);
  const [vinError, setVinError] = useState<string | null>(null);

  // Files (keep originals for preview; data URLs stored in draft on submit)
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [offerFiles, setOfferFiles] = useState<File[]>([]);

  const vinClean = useMemo(() => cleanVin(draft.vin), [draft.vin]);
  const vinOk = useMemo(() => isValidVin(vinClean), [vinClean]);

  const progress = useMemo(() => {
    return Math.round(((step + 1) / TOTAL_STEPS) * 100);
  }, [step]);

  // Auto-decode if initial VIN passed in
  const didAutoDecode = useRef(false);
  useEffect(() => {
    if (!didAutoDecode.current && vinOk && !draft.vehicle) {
      didAutoDecode.current = true;
      decodeVin();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vinOk]);

  function updateDraft(next: Partial<LeadDraft>) {
    setDraft(d => ({ ...d, ...next }));
  }

  function updateContact(next: Partial<LeadDraft['contact']>) {
    setDraft(d => ({ ...d, contact: { ...d.contact, ...next } }));
  }

  function updateLocation(next: Partial<NonNullable<LeadDraft['location']>>) {
    setDraft(d => ({ ...d, location: { ...(d.location ?? {}), ...next } }));
  }

  function updateTitle(next: Partial<NonNullable<LeadDraft['title']>>) {
    setDraft(d => ({ ...d, title: { ...(d.title ?? {}), ...next } }));
  }

  function updateExistingOffer(next: Partial<NonNullable<LeadDraft['existingOffer']>>) {
    setDraft(d => ({ ...d, existingOffer: { ...(d.existingOffer ?? {}), ...next } }));
  }

  async function decodeVin() {
    setVinError(null);
    const vin = cleanVin(draft.vin);
    if (!isValidVin(vin)) {
      setVinError('VIN must be 17 characters (letters & numbers). No I/O/Q.');
      return;
    }
    setVinLoading(true);
    try {
      const res = await fetch(`/api/vin?vin=${encodeURIComponent(vin)}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? 'VIN decode failed');
      const vehicle = json.vehicle ?? {};
      updateDraft({ vin, vehicle });
      setStep(1);
    } catch (e: any) {
      setVinError(e?.message ?? 'VIN decode failed');
    } finally {
      setVinLoading(false);
    }
  }

  const canContinue = useMemo(() => {
    // Gate minimal required info per step
    if (mode === 'chat') return true;

    switch (step) {
      case 0:
        return vinOk && !vinLoading;
      case 1:
        return draft.confirmedVehicle === true;
      case 2:
        return (
          Boolean(draft.contact.name?.trim()) &&
          Boolean(draft.contact.phone?.trim())
        );
      case 3:
        return Boolean(draft.location?.zip?.trim()) && Boolean(draft.mileage?.trim());
      case 4:
        if (draft.title?.titleInHand === 'Yes') return true;
        if (draft.title?.titleInHand === 'No' && draft.title?.hasLoan === 'No') return true;
        if (draft.title?.titleInHand === 'No' && draft.title?.hasLoan === 'Yes') {
          return Boolean(draft.title?.lienholder?.trim());
        }
        return false;
      case 5:
        return Boolean(draft.condition);
      case 6:
        return photoFiles.length >= 3;
      case 7:
        if ((draft.existingOffer?.source ?? 'None') === 'None') return true;
        // If they claim an offer, require amount + file
        return Boolean(draft.existingOffer?.amount?.trim()) && offerFiles.length >= 1;
      default:
        return false;
    }
  }, [mode, step, vinOk, vinLoading, draft, photoFiles.length, offerFiles.length]);

  async function onSubmit() {
    // Convert files to data URLs (prototype)
    const photos = await Promise.all(photoFiles.map(fileToDataUrl));
    const offerUploads = await Promise.all(offerFiles.map(fileToDataUrl));

    const payload: LeadDraft = {
      ...draft,
      vin: vinClean,
      photos,
      existingOffer: {
        ...(draft.existingOffer ?? { source: 'None' }),
        files: offerUploads,
      },
    };

    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    if (!res.ok) {
      alert(json?.error ?? 'Failed to submit. Try again.');
      return;
    }

    router.push(`/thank-you/${json.id}`);
  }

  return (
    <div>
      <div className="mb-4">
        <div className="text-2xl font-semibold tracking-tight text-zinc-900">Get a cash offer</div>
        <div className="mt-1 text-sm text-zinc-600">Fast, simple, mobile-first.</div>
      </div>

      <Card className="p-3">
        <div className="flex gap-2">
          <button
            onClick={() => setMode('quick')}
            className={`flex-1 rounded-2xl px-3 py-2 text-sm font-medium transition ${
              mode === 'quick'
                ? 'bg-zinc-900 text-white'
                : 'bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200'
            }`}
          >
            Quick questions
          </button>
          <button
            onClick={() => setMode('chat')}
            className={`flex-1 rounded-2xl px-3 py-2 text-sm font-medium transition ${
              mode === 'chat'
                ? 'bg-zinc-900 text-white'
                : 'bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200'
            }`}
          >
            Chat / voice
          </button>
        </div>
      </Card>

      <div className="mt-4">
        {mode === 'chat' ? (
          <ChatAgent
            draft={draft}
            setDraft={setDraft}
            photoFiles={photoFiles}
            setPhotoFiles={setPhotoFiles}
            offerFiles={offerFiles}
            setOfferFiles={setOfferFiles}
            onSubmit={onSubmit}
          />
        ) : (
          <>
            <div className="mb-3">
              <Progress value={progress} />
              <div className="mt-2 text-xs text-zinc-500">
                Step {step + 1} of {TOTAL_STEPS}
              </div>
            </div>

            <Card className="p-5">
              {step === 0 ? (
                <div>
                  <div className="text-lg font-semibold text-zinc-900">What’s your VIN?</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Dealers need this to verify your exact car.
                  </div>

                  <div className="mt-4">
                    <Input
                      label="VIN (required)"
                      placeholder="17 characters"
                      value={draft.vin}
                      onChange={e => updateDraft({ vin: e.target.value })}
                      autoCapitalize="characters"
                      autoCorrect="off"
                      spellCheck={false}
                      inputMode="text"
                      error={vinError ?? undefined}
                      hint="Usually on the driver-side dashboard (near the windshield) or driver door jamb."
                    />
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <Button
                      size="lg"
                      disabled={!vinOk || vinLoading}
                      onClick={decodeVin}
                      className="flex-1"
                    >
                      {vinLoading ? 'Decoding…' : 'Continue'}
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      onClick={() =>
                        alert(
                          'Look on your dashboard near the windshield, the driver door jamb, or your insurance/registration.'
                        )
                      }
                    >
                      Where is it?
                    </Button>
                  </div>
                </div>
              ) : null}

              {step === 1 ? (
                <div>
                  <div className="text-lg font-semibold text-zinc-900">Is this your car?</div>
                  <div className="mt-1 text-sm text-zinc-600">We decoded your VIN.</div>

                  <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-4">
                    <div className="text-sm text-zinc-500">VIN</div>
                    <div className="mt-1 font-mono text-sm text-zinc-900">{vinClean}</div>

                    <div className="mt-3 text-sm text-zinc-500">Vehicle</div>
                    <div className="mt-1 text-base font-semibold text-zinc-900">
                      {draft.vehicle?.year ?? '—'} {draft.vehicle?.make ?? ''}{' '}
                      {draft.vehicle?.model ?? ''}{' '}
                      {draft.vehicle?.trim ? `(${draft.vehicle?.trim})` : ''}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button
                      size="lg"
                      className="flex-1"
                      onClick={() => {
                        updateDraft({ confirmedVehicle: true });
                        setStep(2);
                      }}
                    >
                      Yes, that’s it
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="flex-1"
                      onClick={() => {
                        updateDraft({ vin: '', vehicle: undefined, confirmedVehicle: undefined });
                        setStep(0);
                      }}
                    >
                      Nope
                    </Button>
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div>
                  <div className="text-lg font-semibold text-zinc-900">
                    Where should dealers reach you?
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Dealers will text you a cash offer. We keep this simple.
                  </div>

                  <div className="mt-4 grid gap-3">
                    <Input
                      label="Your name"
                      placeholder="First + last"
                      value={draft.contact.name ?? ''}
                      onChange={e => updateContact({ name: e.target.value })}
                    />

                    <Input
                      label="Mobile phone (required)"
                      placeholder="(555) 555-5555"
                      value={draft.contact.phone ?? ""}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => updateContact({ phone: formatPhone(e.target.value) })}
                      inputMode="tel"
                      hint="Dealers will text you their cash offer."
                    />

                    <Input
                      label="Email (optional)"
                      placeholder="you@email.com"
                      value={draft.contact.email ?? ''}
                      onChange={e => updateContact({ email: e.target.value })}
                      inputMode="email"
                    />
                  </div>
                </div>
              ) : null}

              {step === 3 ? (
                <div>
                  <div className="text-lg font-semibold text-zinc-900">Basics</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Dealers mostly care about location + mileage.
                  </div>

                  <div className="mt-4 grid gap-3">
                    <Input
                      label="ZIP code"
                      placeholder="90210"
                      value={draft.location?.zip ?? ''}
                      onChange={e => updateLocation({ zip: e.target.value })}
                      inputMode="numeric"
                      hint="Where the car is located."
                    />

                    <Input
                      label="Mileage"
                      placeholder="e.g. 52,340"
                      value={draft.mileage ?? ''}
                      onChange={e => updateDraft({ mileage: e.target.value })}
                      inputMode="numeric"
                    />
                  </div>
                </div>
              ) : null}

              {step === 4 ? (
                <div>
                  <div className="text-lg font-semibold text-zinc-900">Title & loan</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    This affects how fast a dealer can pay you.
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-medium text-zinc-900">
                      Do you have the title in hand?
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Chip
                        selected={draft.title?.titleInHand === 'Yes'}
                        onClick={() =>
                          updateTitle({
                            titleInHand: 'Yes',
                            hasLoan: undefined,
                            lienholder: '',
                            payoffAmount: '',
                          })
                        }
                      >
                        Yes
                      </Chip>
                      <Chip
                        selected={draft.title?.titleInHand === 'No'}
                        onClick={() => updateTitle({ titleInHand: 'No' })}
                      >
                        No
                      </Chip>
                    </div>
                  </div>

                  {draft.title?.titleInHand === 'No' ? (
                    <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-4">
                      <div className="text-sm font-medium text-zinc-900">
                        Is there a loan on it?
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Chip
                          selected={draft.title?.hasLoan === 'Yes'}
                          onClick={() => updateTitle({ hasLoan: 'Yes' })}
                        >
                          Yes
                        </Chip>
                        <Chip
                          selected={draft.title?.hasLoan === 'No'}
                          onClick={() =>
                            updateTitle({ hasLoan: 'No', lienholder: '', payoffAmount: '' })
                          }
                        >
                          No
                        </Chip>
                      </div>

                      {draft.title?.hasLoan === 'Yes' ? (
                        <div className="mt-3 grid gap-3">
                          <Input
                            label="What bank/lender?"
                            placeholder="e.g. Chase, Capital One, Navy Federal"
                            value={draft.title?.lienholder ?? ''}
                            onChange={e => updateTitle({ lienholder: e.target.value })}
                          />
                          <Input
                            label="Approx payoff amount (optional)"
                            placeholder="e.g. 18,500"
                            value={draft.title?.payoffAmount ?? ''}
                            onChange={e => updateTitle({ payoffAmount: e.target.value })}
                            inputMode="numeric"
                          />
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              ) : null}

              {step === 5 ? (
                <div>
                  <div className="text-lg font-semibold text-zinc-900">Condition</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Pick the closest match. No overthinking.
                  </div>

                  <div className="mt-4 grid gap-2">
                    {(['Excellent', 'Good', 'Fair', 'Needs work'] as Condition[]).map(c => (
                      <button
                        key={c}
                        className={`rounded-2xl border p-4 text-left transition ${
                          draft.condition === c
                            ? 'border-zinc-900 bg-zinc-900 text-white'
                            : 'border-zinc-200 bg-white hover:bg-zinc-50'
                        }`}
                        onClick={() => updateDraft({ condition: c })}
                      >
                        <div className="font-medium">{c}</div>
                        <div
                          className={`mt-1 text-xs ${draft.condition === c ? 'text-zinc-200' : 'text-zinc-500'}`}
                        >
                          {c === 'Excellent' ? 'Like-new. No issues.' : null}
                          {c === 'Good' ? 'Normal wear. Runs great.' : null}
                          {c === 'Fair' ? 'Noticeable wear or small issues.' : null}
                          {c === 'Needs work' ? 'Mechanical / body work needed.' : null}
                        </div>
                      </button>
                    ))}
                  </div>

                  <Divider />

                  <div>
                    <div className="text-sm font-medium text-zinc-900">Any accidents?</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Chip
                        selected={draft.accidents === 'No'}
                        onClick={() => updateDraft({ accidents: 'No' })}
                      >
                        No
                      </Chip>
                      <Chip
                        selected={draft.accidents === 'Yes'}
                        onClick={() => updateDraft({ accidents: 'Yes' })}
                      >
                        Yes
                      </Chip>
                      <Chip
                        selected={draft.accidents === 'Not sure'}
                        onClick={() => updateDraft({ accidents: 'Not sure' })}
                      >
                        Not sure
                      </Chip>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Textarea
                      label="Anything else a dealer should know? (optional)"
                      placeholder="Examples: new tires, check engine light, smoke smell, aftermarket wheels…"
                      value={draft.notes ?? ''}
                      onChange={e => updateDraft({ notes: e.target.value })}
                    />
                  </div>
                </div>
              ) : null}

              {step === 6 ? (
                <div>
                  <div className="text-lg font-semibold text-zinc-900">Photos</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Upload at least 3. More = better offers.
                  </div>

                  <div className="mt-4">
                    <PhotoPicker files={photoFiles} setFiles={setPhotoFiles} />
                    <div className="mt-3 text-xs text-zinc-500">
                      Tips: 4 corners, interior, odometer, any damage.
                    </div>
                  </div>
                </div>
              ) : null}

              {step === 7 ? (
                <div>
                  <div className="text-lg font-semibold text-zinc-900">Existing offer?</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    If you already have a Carvana or CarMax offer, upload it. Dealers will verify
                    it.
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-medium text-zinc-900">
                      Do you have a valid offer?
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {(['None', 'Carvana', 'CarMax', 'Other'] as ExistingOfferSource[]).map(s => (
                        <Chip
                          key={s}
                          selected={(draft.existingOffer?.source ?? 'None') === s}
                          onClick={() =>
                            updateExistingOffer({ source: s, amount: '', expires: '' })
                          }
                        >
                          {s === 'None' ? 'No' : s}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  {(draft.existingOffer?.source ?? 'None') !== 'None' ? (
                    <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-4">
                      <div className="text-sm font-medium text-zinc-900">Offer details</div>
                      <div className="mt-1 text-xs text-zinc-500">
                        ⚠️ Don’t edit screenshots / PDFs. Dealers check.
                      </div>

                      <div className="mt-3 grid gap-3">
                        <Input
                          label="Offer amount"
                          placeholder="e.g. 26,500"
                          value={draft.existingOffer?.amount ?? ''}
                          onChange={e => updateExistingOffer({ amount: e.target.value })}
                          inputMode="numeric"
                        />
                        <Input
                          label="Expiration (optional)"
                          placeholder="e.g. 2026-03-12"
                          value={draft.existingOffer?.expires ?? ''}
                          onChange={e => updateExistingOffer({ expires: e.target.value })}
                          inputMode="text"
                        />

                        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                          <div className="text-sm font-medium text-zinc-900">Upload offer</div>
                          <div className="mt-1 text-xs text-zinc-500">PDF or screenshot.</div>
                          <input
                            className="mt-3 block w-full text-sm"
                            type="file"
                            accept="image/*,application/pdf"
                            onChange={e => setOfferFiles(Array.from(e.target.files ?? []))}
                          />
                          {offerFiles.length ? (
                            <div className="mt-2 text-xs text-zinc-600">
                              {offerFiles.length} file selected
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </Card>

            <div className="fixed bottom-0 left-0 right-0 border-t border-zinc-200/70 bg-white/80 backdrop-blur safe-bottom">
              <div className="mx-auto flex max-w-md items-center gap-2 px-4 py-3">
                <Button
                  variant="secondary"
                  className="w-24"
                  disabled={step === 0}
                  onClick={() => setStep(s => Math.max(0, s - 1))}
                >
                  Back
                </Button>

                {step < TOTAL_STEPS - 1 ? (
                  <Button
                    className="flex-1"
                    disabled={!canContinue}
                    onClick={() => {
                      if (step === 0) {
                        decodeVin();
                        return;
                      }
                      setStep(s => Math.min(TOTAL_STEPS - 1, s + 1));
                    }}
                    size="lg"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button className="flex-1" size="lg" disabled={!canContinue} onClick={onSubmit}>
                    Submit for bids
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
