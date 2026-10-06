import type React from "react";
import { Section } from "../components/commons/Section";
import { SelectionBox } from "../components/commons/SelectionBox";
import { Terminal } from "../components/commons/Terminal";
import { sections } from "../data/profile";

export const Contents: React.FC = () => {
    return (
        <Section id="index" tone="ink">
            <div aria-hidden className="absolute right-[calc(5%-14rem)] bottom-[calc(10%-14rem)] size-[52rem] bg-radial-[closest-side] from-terracotta-500/20 via-terracotta-500/10 via-45% to-transparent" />

            <h2 className="relative z-10 flex flex-wrap items-center gap-x-5 text-[clamp(3rem,8.5vw,8rem)] font-semibold leading-none tracking-tighter">
                Tabla <span className="text-[0.4em] font-medium tracking-normal">de</span>
                <span className="font-serif font-normal italic tracking-normal">Contenido</span>
                <svg viewBox="0 0 80 64" className="h-[0.7em] w-auto text-terracotta-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" aria-hidden>
                    <path d="M4 10a4 4 0 0 1 4-4h20l6 7h34a4 4 0 0 1 4 4v38a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" />
                    <path d="M10 22a3 3 0 0 1 3-3h60a3 3 0 0 1 3 3l-4 33a4 4 0 0 1-4 4H12" />
                </svg>
            </h2>

            <div className="relative z-10 mt-16 grid flex-1 items-center gap-16 lg:grid-cols-[1.4fr_1fr]">
                <ul className="flex flex-wrap gap-x-10 gap-y-8">
                    {sections.map((section, index) => (
                        <li key={section.id}>
                            <a href={`#${section.id}`} className="group block">
                                <SelectionBox tone="dark">
                                    <span className="flex items-start gap-2 px-4 py-1 font-serif text-[clamp(2.2rem,4.6vw,4.2rem)] italic leading-tight transition-colors group-hover:text-terracotta-500">
                                        {section.label}
                                        <sup className="pt-3 font-mono text-sm not-italic opacity-60">{String(index + 1).padStart(2, "0")}</sup>
                                    </span>
                                </SelectionBox>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="relative mx-auto w-full max-w-md">
                    <div aria-hidden className="absolute -top-8 -left-8 size-40 rounded-full border-2 border-paper bg-terracotta-500" />
                    <div aria-hidden className="absolute -right-6 -bottom-6 size-28 rotate-12 rounded-2xl bg-terracotta-300" />
                    <Terminal title="explorer" tone="dark" className="relative">
                        <p className="mb-2"><span className="text-terracotta-400">▾</span> portfolio/</p>
                        <ul className="space-y-1.5">
                            {sections.map((section, index) => (
                                <li key={section.id}>
                                    <a href={`#${section.id}`} className="flex gap-2 transition-colors hover:text-terracotta-400">
                                        <span className="opacity-50">{index === sections.length - 1 ? "└──" : "├──"}</span>
                                        {String(index + 1).padStart(2, "0")}_{section.file}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Terminal>
                </div>
            </div>
        </Section>
    );
};
