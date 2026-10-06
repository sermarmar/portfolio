import type React from "react";
import { profile } from "../../data/profile";

export type Tone = "ink" | "paper" | "accent";

const tones: Record<Tone, string> = {
    ink: "bg-ink text-paper",
    paper: "bg-paper text-ink",
    accent: "bg-terracotta-500 text-ink",
};

interface SectionProps {
    id: string;
    tone: Tone;
    children: React.ReactNode;
    meta?: boolean;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, tone, children, meta = true, className = "" }) => {
    return (
        <section id={id} className={`relative overflow-hidden min-h-svh flex flex-col px-5 md:px-10 lg:px-16 pt-28 md:pt-32 pb-16 md:pb-24 ${tones[tone]} ${className}`}>
            {meta && (
                <div className="relative z-10 flex justify-between gap-4 text-sm md:text-base opacity-80 mb-10 md:mb-14">
                    <span>{profile.name} · Trabajo <em className="font-serif text-[1.15em]">seleccionado</em></span>
                    <span>{profile.year}</span>
                </div>
            )}
            {children}
        </section>
    );
};
