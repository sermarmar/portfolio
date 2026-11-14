import type React from "react";
import { useRef } from "react";
import { Section } from "../components/commons/Section";
import { SectionTitle } from "../components/commons/SectionTitle";
import { education } from "../data/profile";
import { gsap, motionOk, ScrollTrigger, useGSAP } from "../lib/gsap";

export const Education: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>("article", gridRef.current);
        const mm = gsap.matchMedia();

        mm.add({ motion: motionOk, reduce: "(prefers-reduced-motion: reduce)" }, ({ conditions }) => {
            if (!conditions?.motion) {
                gsap.set(cards, { autoAlpha: 0 });
                ScrollTrigger.batch(cards, { start: "top 88%", once: true, onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, duration: 0.6, stagger: 0.1 }) });
                return;
            }

            gsap.set(cards, { autoAlpha: 0, y: 110, scale: 0.9, rotation: (index: number) => (index % 2 ? 7 : -7) });
            ScrollTrigger.batch(cards, {
                start: "top 88%",
                once: true,
                onEnter: (batch) => gsap.timeline()
                    .to(batch, { autoAlpha: 1, duration: 0.35, stagger: 0.12, ease: "power1.out" })
                    .to(batch, { y: 0, scale: 1, rotation: 0, duration: 0.9, stagger: 0.12, ease: "back.out(1.6)", clearProps: "transform" }, 0),
            });

            gsap.from("[data-deco]", {
                scale: 0,
                rotation: -120,
                duration: 0.8,
                ease: "back.out(2)",
                scrollTrigger: { trigger: gridRef.current, start: "top 75%", once: true },
            });
        });
    }, { scope: gridRef });

    return (
        <Section id="education" tone="accent">
            <SectionTitle kicker="cat formacion.md" title="Formación" accent="académica" number="03" tone="accent" reveal />

            <div ref={gridRef} className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                <div aria-hidden data-deco className="absolute right-[26%] -bottom-10 size-32 rotate-12 rounded-3xl border-[3px] border-ink bg-paper max-md:hidden" />
                {education.map((item) => (
                    <article key={item.title} className="glass relative flex flex-col rounded-3xl border-2 border-ink bg-white/20 p-6 md:p-8">
                        <div className="flex items-center justify-between gap-3">
                            <span className="rounded-full bg-ink px-3 py-1 font-mono text-xs text-paper md:text-sm">{item.years}</span>
                            <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden>
                                <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm-6 9.2v4.3c0 1.7 2.7 3.5 6 3.5s6-1.8 6-3.5v-4.3l-6 3.3-6-3.3Z" />
                            </svg>
                        </div>
                        <h3 className="mt-8 mb-6 font-serif text-3xl italic leading-tight md:text-4xl">{item.title}</h3>
                        <p className="mt-auto font-semibold">{item.level}</p>
                    </article>
                ))}
                <article className="relative flex flex-col justify-between gap-6 rounded-2xl border-[3px] border-ink bg-ink p-6 text-paper shadow-brutal md:p-8">
                    <p className="font-mono text-sm leading-relaxed md:text-base">
                        <span className="text-accent-on-dark">while</span> <span className="text-paper/70">(</span><span className="text-accent-on-dark">true</span><span className="text-paper/70">) {"{"}</span><br />
                        <span className="pl-6 font-bold">aprender</span><span className="text-paper/70">();</span><br />
                        <span className="text-paper/70">{"}"}</span><span className="ml-1 animate-typing border-r-[0.6em] border-terracotta-500" />
                    </p>
                    <p className="font-serif text-3xl italic md:text-4xl">Aprendizaje continuo</p>
                </article>
            </div>
        </Section>
    );
};
