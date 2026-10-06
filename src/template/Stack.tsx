import type React from "react";
import { Section } from "../components/commons/Section";
import { SectionTitle } from "../components/commons/SectionTitle";
import { stack } from "../data/profile";

export const Stack: React.FC = () => {
    return (
        <Section id="tecnology" tone="ink">
            <div aria-hidden className="absolute top-1/2 left-1/4 size-[26rem] rounded-full bg-terracotta-500/35 blur-[120px]" />
            <div aria-hidden className="absolute right-[8%] bottom-[12%] size-64 rounded-full bg-terracotta-700/40 blur-[90px]" />

            <SectionTitle kicker="// import { herramientas }" title="Stack" accent="tecnológico" number="04" tone="ink" />

            <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div aria-hidden className="absolute -top-10 left-[45%] size-36 rounded-full border-2 border-paper bg-terracotta-500 max-md:hidden" />
                {stack.map((group, index) => (
                    <article key={group.title} className={`glass relative flex flex-col rounded-3xl bg-white/[0.06] p-6 transition-transform duration-300 hover:-translate-y-1 ${group.wide ? "md:col-span-2" : ""}`}>
                        <div className="flex items-center justify-between font-mono text-sm opacity-70">
                            <span>{group.folder}</span>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <h3 className="mt-6 mb-6 font-serif text-5xl italic">{group.title}</h3>
                        {group.note && <p className="-mt-3 mb-6 font-mono text-sm text-terracotta-300">{group.note}</p>}
                        <ul className="mt-auto flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li key={item} className="rounded-full border-2 border-paper/70 px-3 py-1 text-sm font-medium transition-colors hover:border-ink hover:bg-terracotta-500 hover:text-ink">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </Section>
    );
};
