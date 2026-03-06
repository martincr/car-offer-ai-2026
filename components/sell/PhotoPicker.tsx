'use client';

import { useMemo } from 'react';
import { Button } from '@/components/ui/Button';

function uniqByKey<T>(arr: T[], key: (t: T) => string) {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const item of arr) {
    const k = key(item);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(item);
  }
  return out;
}

export function PhotoPicker({
  files,
  setFiles,
}: {
  files: File[];
  setFiles: (files: File[]) => void;
}) {
  const previews = useMemo(() => {
    return files.map(f => ({ file: f, url: URL.createObjectURL(f) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files.map(f => `${f.name}-${f.size}-${f.lastModified}`).join('|')]);

  return (
    <div>
      <div className="rounded-3xl border border-zinc-200 bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-medium text-zinc-900">Add photos</div>
            <div className="mt-0.5 text-xs text-zinc-500">Camera or gallery • jpg/png/heic</div>
          </div>
          <div className="text-xs text-zinc-600">{files.length} selected</div>
        </div>

        <input
          className="mt-3 block w-full text-sm"
          type="file"
          accept="image/*"
          multiple
          capture="environment"
          onChange={e => {
            const next = Array.from(e.target.files ?? []);
            if (!next.length) return;
            const merged = uniqByKey(
              [...files, ...next],
              f => `${f.name}-${f.size}-${f.lastModified}`
            );
            setFiles(merged.slice(0, 12)); // keep it sane
            e.currentTarget.value = '';
          }}
        />

        {files.length ? (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {previews.map((p, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.url} alt={`Photo ${idx + 1}`} className="h-24 w-full object-cover" />
                <button
                  className="absolute right-1 top-1 rounded-full bg-white/90 px-2 py-1 text-xs text-zinc-900 shadow"
                  onClick={() => setFiles(files.filter((_, i) => i !== idx))}
                  type="button"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-4 text-center text-xs text-zinc-500">
            No photos yet.
          </div>
        )}
      </div>

      {files.length ? (
        <div className="mt-3">
          <Button
            variant="ghost"
            onClick={() => setFiles([])}
            type="button"
            className="w-full justify-center"
          >
            Remove all
          </Button>
        </div>
      ) : null}
    </div>
  );
}
