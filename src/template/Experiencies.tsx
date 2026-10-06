import type React from "react";
import { Section } from "../components/commons/Section";
import { SectionTitle } from "../components/commons/SectionTitle";
import { Terminal } from "../components/commons/Terminal";
import { Timesline } from "../components/timeline/Timesline";
import { experiences } from "../data/profile";

const shortHash = (text: string) => {
    let hash = 0;
    for (const char of text) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
    return hash.toString(16).padStart(7, "0").slice(0, 7);
};

const commits = experiences.flatMap(({ title, clients }) =>
    clients?.length ? clients.map((client) => `${title} (${client.name})`) : [title]
);

export const Experiencies: React.FC = () => {
    return (
        <Section id="experiencies" tone="paper">
            <SectionTitle kicker="// git log --career" title="Experiencia" accent="profesional" number="02" tone="paper" />

            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.6fr]">
                <div className="relative lg:sticky lg:top-32">
                    <div aria-hidden className="absolute -top-6 -left-6 size-32 rounded-full border-[3px] border-ink bg-terracotta-500" />
                    <div aria-hidden className="absolute -right-4 -bottom-4 size-24 rounded-full bg-terracotta-300 blur-xl" />
                    <Terminal title="git log --oneline" className="relative">
                        <ul className="space-y-2 text-sm">
                            {commits.map((commit, index) => (
                                <li key={commit}>
                                    <span className="text-terracotta-700">{shortHash(commit)}</span>{" "}
                                    {index === 0 && <span className="font-bold">(HEAD → main) </span>}
                                    <span className="opacity-80">feat: {commit}</span>
                                </li>
                            ))}
                            <li className="opacity-50">0000000 init: Hola, mundo</li>
                        </ul>
                    </Terminal>
                </div>
                <Timesline times={experiences} />
            </div>
        </Section>
    );
};
