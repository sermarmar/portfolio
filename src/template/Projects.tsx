import type React from "react";
import { Section } from "../components/commons/Section";
import { SectionTitle } from "../components/commons/SectionTitle";
import { projects } from "../data/profile";

type Project = (typeof projects)[number];

const Preview: React.FC<{ project: Project }> = ({ project }) => (
    <div className="overflow-hidden rounded-2xl border-[3px] border-ink bg-paper shadow-brutal">
        <div className="flex items-center gap-2 border-b-[3px] border-ink px-4 py-3">
            <span className="size-3.5 rounded-full border-2 border-ink bg-terracotta-500" />
            <span className="size-3.5 rounded-full border-2 border-ink bg-paper" />
            <span className="size-3.5 rounded-full border-2 border-ink bg-ink" />
            <span className="ml-3 flex-1 truncate rounded-full border-2 border-ink bg-white px-4 py-0.5 font-mono text-xs md:text-sm">
                https://{project.url}
            </span>
        </div>
        <div className="relative grid aspect-[16/9] place-items-center overflow-hidden bg-terracotta-500 bg-[linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] bg-[size:48px_48px] md:aspect-[16/7]">
            <div aria-hidden className="absolute top-[8%] left-[22%] aspect-square w-[18%] rounded-full border-[3px] border-ink bg-paper" />
            <div aria-hidden className="absolute right-[22%] bottom-[6%] aspect-square w-[14%] rotate-12 rounded-3xl border-[3px] border-ink bg-ink" />
            <div className="glass relative rounded-3xl bg-white/25 px-8 py-5 text-center md:px-14 md:py-8">
                <p className="text-[clamp(2rem,6vw,5rem)] font-bold leading-none tracking-tighter">
                    {project.title} <span className="font-serif font-normal italic tracking-normal">{project.accent}</span>
                </p>
                <p className="mt-2 font-mono text-xs md:text-sm">{project.stack}</p>
            </div>
        </div>
    </div>
);

export const Projects: React.FC = () => {
    return (
        <Section id="projects" tone="paper">
            <SectionTitle kicker="// ls ./proyectos" title="Proyectos" accent="destacados" number="05" tone="paper" />

            <div className="space-y-24 md:space-y-32">
                {projects.map((project, index) => (
                    <article key={project.title}>
                        <header className="mb-8 flex flex-wrap items-start justify-between gap-x-10 gap-y-6">
                            <h3 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-none tracking-tighter">
                                {project.title} <span className="font-serif font-normal italic tracking-normal">{project.accent}</span>
                                <sup className="ml-2 align-super text-[0.3em] font-normal tracking-normal">({index + 1})</sup>
                            </h3>
                            <dl className="grid grid-cols-3 gap-x-6 gap-y-1 pt-3 text-sm md:gap-x-10 md:text-base">
                                {[["Stack", project.stack], ["Año", project.year], ["Rol", project.role]].map(([term, value]) => (
                                    <div key={term} className="flex flex-col md:flex-row md:items-baseline">
                                        <dt className="opacity-70">{term}\</dt>
                                        <dd className="font-serif text-lg italic md:text-xl">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </header>

                        <Preview project={project} />

                        <div className="mt-10 grid gap-8 md:grid-cols-3">
                            {[["Resumen", project.overview], ["El reto", project.challenge], ["La solución", project.solution]].map(([heading, text]) => (
                                <div key={heading}>
                                    <h4 className="mb-2 font-serif text-2xl italic">{heading}</h4>
                                    <p className="leading-relaxed text-ink/80">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a href={project.code} className="press rounded-full border-[3px] border-ink bg-ink px-6 py-2.5 font-semibold text-paper shadow-brutal-accent">
                                Ver código ↗
                            </a>
                            <a href={project.demo} className="press rounded-full border-[3px] border-ink bg-terracotta-500 px-6 py-2.5 font-semibold shadow-brutal">
                                Ver demo ↗
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
};
