import Image from "next/image";
import { SITE } from "@/config/site";

/** Decorative orbital visual: the NA symbol at the core with rotating rings and orbiting capability nodes. */
export function OrbitCore({ pillars }: { pillars: string[] }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] [container-type:inline-size]" aria-hidden>
      <div className="absolute inset-[18%] rounded-full bg-brand-blue/30 blur-[80px]" />

      <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
      <div className="absolute inset-[9%] animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-brand-blue/25" />
      <div className="absolute inset-[20%] animate-[spin_26s_linear_infinite_reverse] rounded-full border border-white/10">
        <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-brand-blue shadow-[0_0_16px_4px_rgba(53,99,255,0.8)]" />
        <span className="absolute -bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_3px_rgba(103,232,249,0.7)]" />
      </div>
      <div className="conic-ring absolute inset-[31%] animate-[spin_12s_linear_infinite] rounded-full" />

      <div className="absolute inset-[34%] flex items-center justify-center rounded-full border border-white/10 bg-[#0b142a]/90 shadow-[inset_0_0_40px_rgba(53,99,255,0.25)] backdrop-blur">
        <Image
          src="/brand/logos/na-symbol-primary.svg"
          alt={SITE.logoAlt}
          width={610}
          height={319}
          className="h-auto w-[62%] drop-shadow-[0_0_24px_rgba(53,99,255,0.6)]"
          priority
        />
      </div>

      <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
        {pillars.map((pillar, i) => {
          const angle = (360 / pillars.length) * i - 45;
          return (
            <div
              key={pillar}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `rotate(${angle}deg) translateX(47cqw) rotate(${-angle}deg)` }}
            >
              <div className="flex size-0 animate-[spin_60s_linear_infinite_reverse] items-center justify-center">
                <span className="glass block shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80 sm:text-[11px]">
                  <span className="mr-2 inline-block size-1.5 rounded-full bg-brand-blue align-middle shadow-[0_0_8px_2px_rgba(53,99,255,0.8)]" />
                  {pillar}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
