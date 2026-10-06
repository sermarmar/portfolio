import type React from "react";
import { Circled } from "./Circled";
import type { Tone } from "./Section";

const digits: Record<Tone, string> = {
    ink: "bg-terracotta-500 border-terracotta-500 text-ink",
    paper: "bg-ink border-ink text-paper",
    accent: "bg-ink border-ink text-terracotta-500",
};

interface SectionTitleProps {
    kicker: string;
    title: string;
    accent: string;
    number: string;
    tone: Tone;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ kicker, title, accent, number, tone }) => {
    return (
        <header className="relative z-10 mb-12 md:mb-20">
            <p className="font-mono text-sm md:text-base opacity-70 mb-3">{kicker}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <h2 className="text-[clamp(3rem,7vw,7rem)] leading-[0.9] font-semibold tracking-tighter">
                    {title} <span className="font-serif italic font-normal tracking-normal">{accent}</span>
                </h2>
                <span aria-hidden className="hidden md:block flex-1 min-w-16 h-[3px] bg-current" />
                <span className="text-4xl md:text-6xl">
                    <Circled text={number} className={digits[tone]} />
                </span>
            </div>
        </header>
    );
};
