import React from "react";
import { VoiceWave } from "./VoiceWave";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  children,
}) => (
  <div className="mb-14 lg:mb-20 grid gap-6 lg:grid-cols-12 lg:gap-8">
    <div className="lg:col-span-5">
      <div className="flex items-center gap-3 mb-4">
        <VoiceWave justify="start" size={1} />
        <p className="eyebrow text-brand-primary-400">{eyebrow}</p>
      </div>
      <h2 className="text-5xl lg:text-6xl text-fg">{title}</h2>
    </div>
    {children && (
      <div className="lg:col-span-6 lg:col-start-7 lg:self-end text-lg text-muted leading-relaxed max-w-xl">
        {children}
      </div>
    )}
  </div>
);
