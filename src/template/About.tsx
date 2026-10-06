import type React from "react";
import { Section } from "../components/commons/Section";
import { SectionTitle } from "../components/commons/SectionTitle";
import { about, stats } from "../data/profile";

export const About: React.FC = () => {
    return (
        <Section id="about" tone="accent">
            <SectionTitle kicker="// quién soy" title="Sobre" accent="mí" number="01" tone="accent" />

            <div className="relative grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
                <article className="overflow-hidden rounded-2xl border-[3px] border-ink bg-paper shadow-brutal">
                    <div className="flex items-center justify-between border-b-[3px] border-ink px-5 py-3 font-mono text-sm">
                        <span>sobre-mi.md</span>
                        <span className="opacity-60">UTF-8 · ☕</span>
                    </div>
                    <div className="space-y-4 p-6 text-lg leading-relaxed md:p-10">
                        {about.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </article>

                <div className="relative grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                    <div aria-hidden className="absolute top-10 -right-10 size-48 rounded-full border-[3px] border-ink bg-ink" />
                    <div aria-hidden className="absolute bottom-6 left-4 size-32 rotate-12 rounded-3xl border-[3px] border-ink bg-paper" />
                    {stats.map((stat) => (
                        <div key={stat.label} className="glass relative rounded-3xl bg-white/20 p-6 transition-transform duration-300 hover:-translate-y-1">
                            <p className="text-6xl font-bold tracking-tighter">{stat.value}</p>
                            <p className="mt-1 font-serif text-xl italic">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
