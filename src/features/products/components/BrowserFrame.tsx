import type { ReactNode } from "react";

/** Futuristic browser chrome around a product screenshot. */
export function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0b1428]/80 p-1.5 shadow-[0_40px_120px_-30px_rgba(53,99,255,0.55)] backdrop-blur sm:p-2">
      <div className="flex items-center gap-3 px-2 pb-2 pt-1 sm:px-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-brand-blue/70" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center">
          <span className="truncate rounded-md border border-white/5 bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-white/50 sm:text-[11px]">
            https://{url}
          </span>
        </div>
        <span className="w-10" aria-hidden />
      </div>
      <div className="relative overflow-hidden rounded-xl bg-white">{children}</div>
    </div>
  );
}
