import type React from "react";
import { Link, Navigate, useParams } from "react-router";
import { ProjectPreview } from "../components/ProjectPreview";
import { Section } from "../components/commons/Section";
import { SectionTitle } from "../components/commons/SectionTitle";
import { profile, projects } from "../data/profile";

export const ProjectDetail: React.FC = () => {
    const { slug } = useParams();
    const index = projects.findIndex((project) => project.slug === slug);

    if (index === -1) return <Navigate to="/#projects" replace />;

    const project = projects[index];
    const previous = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];

    return (
        <main>
            <title>{`${project.title} ${project.accent} — ${profile.name}`}</title>
            <Section id="project" tone="paper">
                <Link to="/#projects" className="relative z-10 mb-8 self-start font-mono text-sm transition-colors hover:text-terracotta-600 md:text-base">
                    ← cd ../proyectos
                </Link>

                <SectionTitle as="h1" kicker={`// cat ./proyectos/${project.slug}`} title={project.title} accent={project.accent} number={String(index + 1).padStart(2, "0")} tone="paper" />

                <div className="mb-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-8">
                    <dl className="grid grid-cols-3 gap-x-6 gap-y-1 text-sm md:gap-x-10 md:text-base">
                        {[["Stack", project.stack], ["Año", project.year], ["Rol", project.role]].map(([term, value]) => (
                            <div key={term} className="flex flex-col md:flex-row md:items-baseline">
                                <dt className="opacity-70">{term}\</dt>
                                <dd className="font-serif text-lg italic md:text-xl">{value}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className="flex flex-wrap gap-4">
                        <a href={project.code} className="press rounded-full border-[3px] border-ink bg-ink px-6 py-2.5 font-semibold text-paper shadow-brutal-accent">
                            Ver código ↗
                        </a>
                        <a href={project.demo} className="press rounded-full border-[3px] border-ink bg-terracotta-500 px-6 py-2.5 font-semibold shadow-brutal">
                            Ver demo ↗
                        </a>
                    </div>
                </div>

                <ProjectPreview project={project} />

                <div className="mt-16 grid gap-10 md:grid-cols-3">
                    {[["Resumen", project.overview], ["El reto", project.challenge], ["La solución", project.solution]].map(([heading, text]) => (
                        <div key={heading}>
                            <h2 className="mb-3 font-serif text-3xl italic">{heading}</h2>
                            <p className="text-lg leading-relaxed text-ink/80">{text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 grid gap-10 lg:grid-cols-[1fr_2fr]">
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-tighter">
                        Funcionalidades <span className="font-serif font-normal italic tracking-normal">clave</span>
                    </h2>
                    <ul className="grid gap-5 sm:grid-cols-2">
                        {project.features.map((feature, featureIndex) => (
                            <li key={feature} className="rounded-2xl border-[3px] border-ink bg-white/50 p-5 shadow-brutal-sm">
                                <span className="font-mono text-sm text-terracotta-700">{String(featureIndex + 1).padStart(2, "0")}</span>
                                <p className="mt-2 leading-relaxed">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-24">
                    <h2 className="mb-10 text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-tighter">
                        Gale<span className="font-serif font-normal italic tracking-normal">ría</span>
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        {project.images.length > 0
                            ? project.images.map((image) => (
                                <img key={image.src} src={image.src} alt={image.alt} loading="lazy" className="w-full rounded-2xl border-[3px] border-ink shadow-brutal" />
                            ))
                            : [1, 2].map((n) => (
                                <div key={n} className="grid aspect-[16/10] place-items-center rounded-2xl border-[3px] border-dashed border-ink/40 font-mono text-sm text-ink/50">
                                    {`// captura_0${n}.png — pendiente`}
                                </div>
                            ))}
                    </div>
                </div>

                <nav aria-label="Otros proyectos" className="mt-24 grid gap-6 border-t-[3px] border-ink pt-10 md:grid-cols-2">
                    <Link to={`/proyectos/${previous.slug}`} className="group">
                        <span className="font-mono text-sm opacity-70">← Anterior</span>
                        <p className="mt-2 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-none tracking-tighter transition-colors group-hover:text-terracotta-600">
                            {previous.title} <span className="font-serif font-normal italic tracking-normal">{previous.accent}</span>
                        </p>
                    </Link>
                    <Link to={`/proyectos/${next.slug}`} className="group md:text-right">
                        <span className="font-mono text-sm opacity-70">Siguiente →</span>
                        <p className="mt-2 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-none tracking-tighter transition-colors group-hover:text-terracotta-600">
                            {next.title} <span className="font-serif font-normal italic tracking-normal">{next.accent}</span>
                        </p>
                    </Link>
                </nav>
            </Section>
        </main>
    );
};
