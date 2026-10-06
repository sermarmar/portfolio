import type React from "react";
import { Link } from "react-router";
import { ProjectPreview } from "../components/ProjectPreview";
import { Section } from "../components/commons/Section";
import { SectionTitle } from "../components/commons/SectionTitle";
import { projects } from "../data/profile";

export const Projects: React.FC = () => {
    return (
        <Section id="projects" tone="paper">
            <SectionTitle kicker="// ls ./proyectos" title="Proyectos" accent="destacados" number="05" tone="paper" />

            <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,max(20rem,(100%_-_4rem)/3)),1fr))] gap-x-8 gap-y-16">
                {projects.map((project, index) => (
                    <article key={project.slug}>
                        <Link to={`/proyectos/${project.slug}`} className="group flex h-full flex-col">
                            <div className="transition-transform duration-300 group-hover:-translate-y-1">
                                <ProjectPreview project={project} />
                            </div>

                            <div className="mt-6 flex items-baseline justify-between gap-4 font-mono text-sm opacity-70">
                                <span>({String(index + 1).padStart(2, "0")})</span>
                                <span>{project.year} · {project.role}</span>
                            </div>
                            <h3 className="mt-2 text-4xl font-semibold leading-none tracking-tighter">
                                {project.title} <span className="font-serif font-normal italic tracking-normal">{project.accent}</span>
                            </h3>
                            <p className="mt-4 leading-relaxed text-ink/80">{project.overview}</p>

                            <span className="mt-auto self-start pt-8">
                                <span className="inline-block rounded-full border-[3px] border-ink bg-ink px-5 py-2 text-sm font-semibold text-paper shadow-brutal-accent transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                                    Ver proyecto →
                                </span>
                            </span>
                        </Link>
                    </article>
                ))}
            </div>
        </Section>
    );
};
