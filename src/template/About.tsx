import type React from "react";
import { Fragment } from "react";
import { Section } from "../components/commons/Section";
import { SectionTitle } from "../components/commons/SectionTitle";
import { about, stats } from "../data/profile";

export const About: React.FC = () => {
    return (
        <Section id="about" tone="accent">
            <SectionTitle kicker="whoami" title="Sobre" accent="mí" number="01" tone="accent" />

            <div className="relative grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
                <article className="overflow-hidden rounded-2xl border-[3px] border-ink bg-paper shadow-brutal">
                    <div className="flex items-center justify-between border-b-[3px] border-ink px-5 py-3 font-mono text-sm">
                        <span>sobre-mi.md</span>
                        <span className="opacity-60">UTF-8 · ☕</span>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-4 p-6 text-lg leading-relaxed md:gap-x-6 md:p-10">
                        {about.map((paragraph, index) => (
                            <Fragment key={paragraph}>
                                <span aria-hidden className="select-none pt-[0.2em] text-right font-mono text-sm text-ink/60">{index + 1}</span>
                                <p>{paragraph}</p>
                            </Fragment>
                        ))}
                    </div>
                </article>

                <div className="relative grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                    <div aria-hidden className="absolute bottom-6 left-4 size-32 rotate-12 rounded-3xl border-[3px] border-ink bg-paper" />
                    {stats.map((stat) => (
                        <div key={stat.label} className="glass relative rounded-3xl border-2 border-ink bg-white/20 p-6">
                            <p className="text-6xl font-bold tracking-tighter">{stat.value}</p>
                            <p className="mt-1 font-serif text-xl italic">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
