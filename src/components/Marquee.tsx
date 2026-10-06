import type React from "react";
import { profile } from "../data/profile";

const Arrow: React.FC = () => (
    <svg viewBox="0 0 64 24" className="h-[0.6em] w-auto shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <path d="M0 12h60M50 2l10 10-10 10" strokeLinejoin="round" />
    </svg>
);

const Item: React.FC = () => (
    <span className="flex items-center gap-[0.5em] pr-[0.5em]">
        <span className="-rotate-2 rounded-xl border-[3px] border-ink bg-paper px-[0.4em] py-[0.1em] font-mono font-bold shadow-brutal-sm">
            <span className="text-terracotta-600">&gt;</span>{profile.handle}
        </span>
        <Arrow />
        <span>El <em className="font-serif">portfolio</em> de Sergio</span>
        <Arrow />
    </span>
);

export const Marquee: React.FC = () => {
    return (
        <div className="overflow-hidden border-y-[3px] border-ink bg-terracotta-500 py-4 md:py-6 text-ink" aria-hidden>
            <div className="flex w-max animate-marquee text-[clamp(1.5rem,3.5vw,3rem)] font-medium whitespace-nowrap">
                {Array.from({ length: 8 }, (_, index) => <Item key={index} />)}
            </div>
        </div>
    );
};
