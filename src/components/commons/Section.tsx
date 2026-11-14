import type React from "react";
import { profile, sections } from "../../data/profile";

export type Tone = "ink" | "paper" | "accent";

const tones: Record<Tone, string> = {
    ink: "bg-ink text-paper",
    paper: "bg-paper text-ink",
    accent: "bg-terracotta-500 text-ink",
};

const metaTones: Record<Tone, string> = {
    ink: "text-paper/80",
    paper: "text-ink/80",
    accent: "text-on-accent-muted",
};

interface SectionProps {
    id: string;
    tone: Tone;
    children: React.ReactNode;
    meta?: boolean;
    file?: string;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, tone, children, meta = true, file, className = "" }) => {
    const path = file ?? sections.find((section) => section.id === id)?.file ?? "";

    return (
        <section id={id} className={`relative overflow-clip min-h-svh flex flex-col px-5 md:px-10 lg:px-16 pt-28 md:pt-32 pb-16 md:pb-24 ${tones[tone]} ${className}`}>
            {meta && (
                <div className={`relative z-10 flex justify-between gap-4 font-mono text-xs md:text-sm mb-10 md:mb-14 ${metaTones[tone]}`}>
                    <span className="truncate">~/{profile.handle.toLowerCase()}/portfolio/<span className="font-bold">{path}</span></span>
                    <span>{profile.year}</span>
                </div>
            )}
            {children}
        </section>
    );
};
