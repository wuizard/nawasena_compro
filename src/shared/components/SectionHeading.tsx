import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ index, eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={`flex flex-col gap-5 ${centered ? "mx-auto items-center text-center" : ""} max-w-3xl`}>
      <span className="eyebrow">
        <span className="text-brand-blue">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-brand-blue to-transparent" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="text-pretty text-base leading-relaxed text-white/60 sm:text-lg">{description}</p> : null}
    </Reveal>
  );
}
