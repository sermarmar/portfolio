import type React from "react";
import { useRef } from "react";
import { Link } from "react-router";
import { ProjectPreview } from "../components/ProjectPreview";
import { Section } from "../components/commons/Section";
import { SectionTitle } from "../components/commons/SectionTitle";
import { projects } from "../data/profile";
import { gsap, motionOk, ScrollTrigger, useGSAP } from "../lib/gsap";

export const Projects: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(motionOk, () => {
            const cards = gsap.utils.toArray<HTMLElement>("article", gridRef.current);
            gsap.set(cards, { autoAlpha: 0 });
            ScrollTrigger.batch(cards, {
                start: "top 85%",
                once: true,
                onEnter: (batch) => batch.forEach((card, index) => {
                    const q = gsap.utils.selector(card);
                    gsap.timeline({ delay: index * 0.15, defaults: { ease: "expo.out" } })
                        .to(card, { autoAlpha: 1, duration: 0.3, ease: "power1.out" })
                        .from(q("[data-window]"), { y: 70, rotation: -2, duration: 0.9, clearProps: "transform" }, 0)
                        .from(q("[data-window-dot]"), { scale: 0, duration: 0.4, stagger: 0.07, ease: "back.out(3)" }, 0.25)
                        .from(q("[data-window-url]"), { text: "", duration: 0.6, ease: "none" }, 0.3)
                        .from(q("[data-window-screen]"), { scale: 1.2, duration: 1.4, clearProps: "transform" }, 0.15)
                        .from(q("[data-window-label]"), { y: 24, autoAlpha: 0, duration: 0.7 }, 0.55)
                        .from(q("[data-meta]"), { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.08 }, 0.4);
                }),
            });
        });
    }, { scope: gridRef });

    return (
        <Section id="projects" tone="paper">
            <SectionTitle kicker="ls ./proyectos" title="Proyectos" accent="destacados" number="05" tone="paper" />

            <div ref={gridRef} className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,max(20rem,(100%_-_4rem)/3)),1fr))] gap-x-8 gap-y-16">
                {projects.map((project, index) => (
                    <article key={project.slug}>
                        <Link to={`/proyectos/${project.slug}`} className="group flex h-full flex-col">
                            <div className="transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
                                <ProjectPreview project={project} />
                            </div>

                            <div data-meta className="mt-6 flex items-baseline justify-between gap-4 font-mono text-sm opacity-70">
                                <span>({String(index + 1).padStart(2, "0")})</span>
                                <span>{project.year} · {project.role}</span>
                            </div>
                            <h3 data-meta className="mt-2 text-4xl font-semibold leading-none tracking-tighter">
                                {project.title} <span className="font-serif font-normal italic tracking-normal">{project.accent}</span>
                            </h3>
                            <p data-meta className="mt-4 leading-relaxed text-ink/80">{project.overview}</p>

                            <span data-meta className="mt-auto self-start pt-8">
                                <span className="inline-block rounded-full border-[3px] border-ink bg-ink px-5 py-2 text-sm font-semibold text-paper shadow-brutal-accent transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:-translate-x-0.5 group-focus-visible:-translate-y-0.5">
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
