import type React from "react";
import { Section } from "../components/commons/Section";
import { SelectionBox } from "../components/commons/SelectionBox";
import { RetroComputer } from "../components/RetroComputer";
import { TextWriter } from "../components/TextWriter";
import { profile } from "../data/profile";

const Small: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-[0.4em] font-medium tracking-normal">{children}</span>
);

const FolderIcon: React.FC = () => (
    <svg viewBox="0 0 48 40" className="inline-block h-[0.75em] w-auto align-baseline" aria-hidden>
        <path d="M2 6a4 4 0 0 1 4-4h12l5 6h19a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z" fill="currentColor" />
        <path d="M2 16h44" stroke="var(--color-paper)" strokeWidth="3" />
    </svg>
);

export const Welcome: React.FC = () => {
    return (
        <Section id="intro" tone="paper">
            <div className="grid flex-1 items-center gap-16 lg:grid-cols-[1.35fr_1fr]">
                <div className="space-y-10 pt-6">
                    <SelectionBox label="h2.hola">
                        <h2 className="p-4 text-[clamp(2.4rem,5.4vw,5.2rem)] font-semibold leading-[1.02] tracking-tighter md:p-6">
                            ¡Hola! Soy Sergio, <Small>encantado de</Small> conocerte <Small>y</Small> bienvenido <Small>a</Small> mi{" "}
                            <em className="font-serif font-normal tracking-normal">carpeta</em> <FolderIcon />
                        </h2>
                    </SelectionBox>
                    <p className="font-mono text-lg md:text-2xl">
                        <span className="text-terracotta-700">$</span> Soy Desarrollador de{" "}
                        <span className="font-bold text-terracotta-700"><TextWriter texts={profile.offices} /></span>
                    </p>
                </div>

                <div className="mx-auto w-full max-w-xl">
                    <RetroComputer />
                </div>
            </div>
        </Section>
    );
};
