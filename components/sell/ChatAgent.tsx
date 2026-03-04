"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Input } from "@/components/ui/Input";
import { LeadDraft, Condition, ExistingOfferSource } from "@/lib/types";
import { cleanVin, formatPhone, isNo, isProbablyPhone, isValidVin, isYes } from "@/lib/validators";
import { PhotoPicker } from "@/components/sell/PhotoPicker";

type Msg = { role: "assistant" | "user"; text: string };

type Stage =
  | "vin"
  | "confirm"
  | "name"
  | "phone"
  | "otp"
  | "zip"
  | "mileage"
  | "title"
  | "loan"
  | "bank"
  | "payoff"
  | "condition"
  | "accidents"
  | "photos"
  | "offer"
  | "offerAmount"
  | "offerUpload"
  | "done";

async function decodeVin(vin: string) {
  const res = await fetch(`/api/vin?vin=${encodeURIComponent(vin)}`);
  const json = await res.json();
  if (!res.ok) throw new Error(json?.error ?? "VIN decode failed");
  return json.vehicle as { year?: string; make?: string; model?: string; trim?: string };
}

export function ChatAgent({
  draft,
  setDraft,
  photoFiles,
  setPhotoFiles,
  offerFiles,
  setOfferFiles,
  onSubmit
}: {
  draft: LeadDraft;
  setDraft: (next: LeadDraft) => void;
  photoFiles: File[];
  setPhotoFiles: (files: File[]) => void;
  offerFiles: File[];
  setOfferFiles: (files: File[]) => void;
  onSubmit: () => Promise<void>;
}) {
  const [stage, setStage] = useState<Stage>(() => {
    if (draft.vin && draft.vehicle && draft.confirmedVehicle) return "name";
    return "vin";
  });
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // boot message
    if (messages.length) return;
    setMessages([{ role: "assistant", text: "Hi — I’m Car Offer AI. What’s your VIN? (17 characters)" }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, stage]);

  function push(role: Msg["role"], text: string) {
    setMessages((m) => [...m, { role, text }]);
  }

  function update(next: Partial<LeadDraft>) {
    setDraft({ ...draft, ...next });
  }

  function updateContact(next: Partial<LeadDraft["contact"]>) {
    setDraft({ ...draft, contact: { ...draft.contact, ...next } });
  }

  function updateLocation(zip: string) {
    setDraft({ ...draft, location: { ...(draft.location ?? {}), zip } });
  }

  function updateTitle(next: Partial<NonNullable<LeadDraft["title"]>>) {
    setDraft({ ...draft, title: { ...(draft.title ?? {}), ...next } });
  }

  function updateExistingOffer(next: Partial<NonNullable<LeadDraft["existingOffer"]>>) {
    setDraft({ ...draft, existingOffer: { ...(draft.existingOffer ?? {}), ...next } });
  }

  const quickReplies = useMemo(() => {
    if (stage === "confirm") return ["Yes", "No"];
    if (stage === "title") return ["Yes", "No"];
    if (stage === "loan") return ["Yes", "No"];
    if (stage === "condition") return ["Excellent", "Good", "Fair", "Needs work"];
    if (stage === "accidents") return ["No", "Yes", "Not sure"];
    if (stage === "offer") return ["No", "Carvana", "CarMax"];
    return [];
  }, [stage]);

  async function handleSend(textRaw?: string) {
    const text = (textRaw ?? input).trim();
    if (!text || busy) return;

    push("user", text);
    setInput("");

    try {
      setBusy(true);

      if (stage === "vin") {
        const vin = cleanVin(text);
        if (!isValidVin(vin)) {
          push("assistant", "That VIN doesn’t look right. It should be 17 characters (letters & numbers). Try again.");
          return;
        }

        update({ vin });
        push("assistant", "Decoding VIN…");

        const vehicle = await decodeVin(vin);
        update({ vehicle });

        const summary = `${vehicle?.year ?? "—"} ${vehicle?.make ?? ""} ${vehicle?.model ?? ""}${vehicle?.trim ? ` (${vehicle.trim})` : ""}`.trim();
        push("assistant", `I found: ${summary}. Is that your car?`);
        setStage("confirm");
        return;
      }

      if (stage === "confirm") {
        if (isYes(text)) {
          update({ confirmedVehicle: true });
          push("assistant", "Perfect. What’s your name?");
          setStage("name");
          return;
        }
        if (isNo(text)) {
          update({ vin: "", vehicle: undefined, confirmedVehicle: undefined });
          push("assistant", "No worries. Send me the VIN again.");
          setStage("vin");
          return;
        }
        push("assistant", "Just reply Yes or No 🙂");
        return;
      }

      if (stage === "name") {
        updateContact({ name: text });
        push("assistant", "What’s the best mobile number to text offers to?");
        setStage("phone");
        return;
      }

      if (stage === "phone") {
        const phone = formatPhone(text);
        if (!isProbablyPhone(phone)) {
          push("assistant", "That phone number looks short. Try again (include area code).");
          return;
        }
        updateContact({ phone, phoneVerified: false });
        push("assistant", "Quick verify: enter any 6‑digit code (prototype UI).");
        setStage("otp");
        return;
      }

      if (stage === "otp") {
        if (!/^\d{6}$/.test(text)) {
          push("assistant", "Enter a 6‑digit code (like 123456).");
          return;
        }
        updateContact({ phoneVerified: true });
        push("assistant", "Nice. What ZIP code is the car located in?");
        setStage("zip");
        return;
      }

      if (stage === "zip") {
        updateLocation(text);
        push("assistant", "Mileage?");
        setStage("mileage");
        return;
      }

      if (stage === "mileage") {
        update({ mileage: text });
        push("assistant", "Do you have the title in hand?");
        setStage("title");
        return;
      }

      if (stage === "title") {
        if (isYes(text)) {
          updateTitle({ titleInHand: "Yes", hasLoan: undefined, lienholder: "", payoffAmount: "" });
          push("assistant", "How would you describe the condition?");
          setStage("condition");
          return;
        }
        if (isNo(text)) {
          updateTitle({ titleInHand: "No" });
          push("assistant", "Is there a loan on it?");
          setStage("loan");
          return;
        }
        push("assistant", "Reply Yes or No 🙂");
        return;
      }

      if (stage === "loan") {
        if (isYes(text)) {
          updateTitle({ hasLoan: "Yes" });
          push("assistant", "What bank/lender is the loan with?");
          setStage("bank");
          return;
        }
        if (isNo(text)) {
          updateTitle({ hasLoan: "No", lienholder: "", payoffAmount: "" });
          push("assistant", "How would you describe the condition?");
          setStage("condition");
          return;
        }
        push("assistant", "Reply Yes or No 🙂");
        return;
      }

      if (stage === "bank") {
        updateTitle({ lienholder: text });
        push("assistant", "Approx payoff amount? (optional — you can type ‘skip’)");
        setStage("payoff");
        return;
      }

      if (stage === "payoff") {
        if (text.toLowerCase() !== "skip") updateTitle({ payoffAmount: text });
        push("assistant", "How would you describe the condition?");
        setStage("condition");
        return;
      }

      if (stage === "condition") {
        const normalized = text.toLowerCase();
        let chosen: Condition | null = null;
        if (normalized.includes("excel")) chosen = "Excellent";
        else if (normalized.includes("good")) chosen = "Good";
        else if (normalized.includes("fair")) chosen = "Fair";
        else if (normalized.includes("work") || normalized.includes("fix") || normalized.includes("needs")) chosen = "Needs work";
        if (!chosen) {
          push("assistant", "Pick one: Excellent, Good, Fair, or Needs work.");
          return;
        }
        update({ condition: chosen });
        push("assistant", "Any accidents?");
        setStage("accidents");
        return;
      }

      if (stage === "accidents") {
        const t = text.toLowerCase();
        if (t.startsWith("y")) update({ accidents: "Yes" });
        else if (t.startsWith("n")) update({ accidents: "No" });
        else update({ accidents: "Not sure" });

        push("assistant", "Last step: add photos (at least 3). Use the picker below.");
        setStage("photos");
        return;
      }

      if (stage === "offer") {
        const t = text.trim();
        if (isNo(t) || t.toLowerCase() === "none") {
          updateExistingOffer({ source: "None" });
          push("assistant", "All set. Ready to submit for dealer bids.");
          setStage("done");
          return;
        }
        if (/carvana/i.test(t)) {
          updateExistingOffer({ source: "Carvana" });
          push("assistant", "What’s the offer amount?");
          setStage("offerAmount");
          return;
        }
        if (/carmax/i.test(t) || /car max/i.test(t)) {
          updateExistingOffer({ source: "CarMax" });
          push("assistant", "What’s the offer amount?");
          setStage("offerAmount");
          return;
        }
        // fallback
        updateExistingOffer({ source: "Other" });
        push("assistant", "What’s the offer amount?");
        setStage("offerAmount");
        return;
      }

      if (stage === "offerAmount") {
        updateExistingOffer({ amount: text });
        push("assistant", "Upload the offer PDF/screenshot (don’t edit it — dealers verify).");
        setStage("offerUpload");
        return;
      }

      // file-driven stages handled by UI below
    } catch (e: any) {
      push("assistant", e?.message ?? "Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  }

  // When photos stage gets enough photos, move on automatically
  useEffect(() => {
    if (stage === "photos" && photoFiles.length >= 3) {
      push("assistant", "Got the photos. Do you already have a Carvana or CarMax offer?");
      setStage("offer");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, photoFiles.length]);

  useEffect(() => {
    if (stage === "offerUpload" && offerFiles.length >= 1) {
      push("assistant", "Offer uploaded. Ready to submit for dealer bids.");
      setStage("done");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, offerFiles.length]);

  function startVoice() {
    if (listening) return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input isn’t supported in this browser.");
      return;
    }
    const rec = new SpeechRecognition();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    setListening(true);
    rec.onresult = (event: any) => {
      const transcript = event?.results?.[0]?.[0]?.transcript;
      if (transcript) setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
    };
    rec.onerror = () => {
      setListening(false);
    };
    rec.onend = () => {
      setListening(false);
    };
    rec.start();
  }

  const showSubmit = stage === "done";

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-zinc-200/70 bg-white/60 px-4 py-3">
        <div className="text-sm font-medium text-zinc-900">Chat / voice</div>
        <div className="mt-0.5 text-xs text-zinc-500">Same questions, just conversational.</div>
      </div>

      <div className="max-h-[62vh] overflow-y-auto px-4 py-4">
        <div className="space-y-3">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === "assistant" ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === "assistant" ? "bg-zinc-100 text-zinc-900" : "bg-zinc-900 text-white"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {stage === "photos" ? (
            <div className="mt-2">
              <PhotoPicker files={photoFiles} setFiles={setPhotoFiles} />
              <div className="mt-2 text-xs text-zinc-500">Need at least 3 photos to continue.</div>
            </div>
          ) : null}

          {stage === "offerUpload" ? (
            <div className="mt-2 rounded-3xl border border-zinc-200 bg-white p-4">
              <div className="text-sm font-medium text-zinc-900">Upload offer</div>
              <div className="mt-1 text-xs text-zinc-500">PDF or screenshot. Don’t edit it — dealers verify.</div>
              <input
                className="mt-3 block w-full text-sm"
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => setOfferFiles(Array.from(e.target.files ?? []))}
              />
              {offerFiles.length ? <div className="mt-2 text-xs text-zinc-600">{offerFiles.length} file selected</div> : null}
            </div>
          ) : null}

          {showSubmit ? (
            <div className="mt-2 rounded-3xl border border-zinc-200 bg-white p-4">
              <div className="text-sm font-medium text-zinc-900">Ready to submit</div>
              <div className="mt-1 text-xs text-zinc-500">We’ll syndicate this to dealers and text you bids.</div>

              <div className="mt-3 grid gap-2 text-xs text-zinc-600">
                <div>
                  <span className="text-zinc-500">VIN:</span> <span className="font-mono">{draft.vin}</span>
                </div>
                <div>
                  <span className="text-zinc-500">Car:</span>{" "}
                  {draft.vehicle?.year ?? "—"} {draft.vehicle?.make ?? ""} {draft.vehicle?.model ?? ""}{" "}
                  {draft.vehicle?.trim ? `(${draft.vehicle.trim})` : ""}
                </div>
                <div>
                  <span className="text-zinc-500">Contact:</span> {draft.contact.name ?? "—"} • {draft.contact.phone ?? "—"}
                </div>
                <div>
                  <span className="text-zinc-500">ZIP:</span> {draft.location?.zip ?? "—"} •{" "}
                  <span className="text-zinc-500">Mileage:</span> {draft.mileage ?? "—"}
                </div>
                <div>
                  <span className="text-zinc-500">Condition:</span> {draft.condition ?? "—"} •{" "}
                  <span className="text-zinc-500">Accidents:</span> {draft.accidents ?? "—"}
                </div>
                <div>
                  <span className="text-zinc-500">Photos:</span> {photoFiles.length}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Button className="flex-1" size="lg" onClick={onSubmit}>
                  Submit for bids
                </Button>
              </div>
            </div>
          ) : null}

          <div ref={endRef} />
        </div>
      </div>

      <div className="border-t border-zinc-200/70 bg-white/70 px-3 py-3">
        {quickReplies.length ? (
          <div className="mb-2 flex flex-wrap gap-2">
            {quickReplies.map((q) => (
              <Chip key={q} onClick={() => handleSend(q)}>
                {q}
              </Chip>
            ))}
          </div>
        ) : null}

        <div className="flex items-end gap-2">
          <div className="flex-1">
            <Input
              label={undefined}
              placeholder={stage === "vin" ? "Type VIN…" : "Type your answer…"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
          </div>

          <Button
            variant="secondary"
            className="h-14 w-14 flex-shrink-0 rounded-2xl"
            type="button"
            onClick={startVoice}
            title="Voice"
          >
            {listening ? "…" : "🎤"}
          </Button>

          <Button className="h-14 w-14 flex-shrink-0 rounded-2xl" type="button" onClick={() => handleSend()} disabled={busy}>
            ➤
          </Button>
        </div>

        {!draft.contact.phoneVerified && draft.contact.phone && stage !== "vin" && stage !== "confirm" ? (
          <div className="mt-2 text-xs text-zinc-500">
            Note: phone verification is a prototype UI right now — no real SMS sent.
          </div>
        ) : null}
      </div>
    </Card>
  );
}
