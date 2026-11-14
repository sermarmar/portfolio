import type React from "react";
import { useRef, useState } from "react";
import { Section } from "../components/commons/Section";
import { SectionTitle } from "../components/commons/SectionTitle";
import { Terminal } from "../components/commons/Terminal";
import { Timesline } from "../components/timeline/Timesline";
import { experiences } from "../data/profile";
import { gsap, motionOk, ScrollTrigger, useGSAP } from "../lib/gsap";

const shortHash = (text: string) => {
    let hash = 0;
    for (const char of text) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
    return hash.toString(16).padStart(7, "0").slice(0, 7);
};

const commits = experiences.flatMap(({ title, clients }, experience) =>
    (clients?.length ? clients.map((client) => `${title} (${client.name})`) : [title]).map((text) => ({ text, experience }))
);

export const Experiencies: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState<number | null>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(motionOk, () => {
            gsap.from("[data-timeline-progress]", {
                scaleY: 0,
                ease: "none",
                scrollTrigger: { trigger: "[data-timeline]", start: "top 60%", end: "bottom 60%", scrub: 0.4 },
            });
            gsap.utils.toArray<HTMLElement>("[data-timeline-dot]").forEach((dot) => {
                gsap.from(dot, {
                    scale: 0,
                    duration: 0.4,
                    ease: "back.out(2)",
                    scrollTrigger: { trigger: dot, start: "center 60%", toggleActions: "play none none reverse" },
                });
            });

            const cards = gsap.utils.toArray<HTMLElement>("[data-experience] article", ref.current);
            gsap.set(cards, { autoAlpha: 0 });
            ScrollTrigger.batch(cards, {
                start: "top 85%",
                once: true,
                onEnter: (batch) => batch.forEach((card, index) => {
                    const shadow = getComputedStyle(card).getPropertyValue("--tw-shadow");
                    gsap.set(card, { xPercent: 12, rotation: 2, x: 6, y: 6, "--tw-shadow": shadow.replace(/^\S+ \S+/, "0px 0px") });

                    gsap.timeline({ delay: index * 0.12 })
                        .to(card, { autoAlpha: 1, duration: 0.3 })
                        .to(card, { xPercent: 0, rotation: 0, duration: 0.8, ease: "expo.out" }, 0)
                        .to(card, { x: 0, y: 0, "--tw-shadow": shadow, duration: 0.45, ease: "back.out(3)", clearProps: "transform,--tw-shadow" }, 0.55)
                        .from(card.querySelectorAll("li"), { scale: 0.5, autoAlpha: 0, duration: 0.4, stagger: 0.03, ease: "back.out(2.5)" }, 0.5);
                }),
            });
        });

        // El git log solo se queda fijo al lado de la timeline a partir de lg.
        mm.add("(min-width: 64rem)", () => {
            gsap.utils.toArray<HTMLElement>("[data-experience]").forEach((item, index) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top center",
                    end: "bottom center",
                    onToggle: (self) => self.isActive && setActive(index),
                });
            });
            return () => setActive(null);
        });
    }, { scope: ref });

    return (
        <Section id="experiencies" tone="paper">
            <SectionTitle kicker="git log --career" title="Experiencia" accent="profesional" number="02" tone="paper" />

            <div ref={ref} className="grid items-start gap-12 lg:grid-cols-[1fr_1.6fr]">
                <div className="relative lg:sticky lg:top-32">
                    <div aria-hidden className="absolute -top-6 -left-6 size-32 rounded-full border-[3px] border-ink bg-terracotta-500" />
                    <div aria-hidden className="absolute -right-20 -bottom-20 size-56 bg-radial-[closest-side] from-terracotta-300/85 via-terracotta-300/45 via-45% to-transparent" />
                    <Terminal title="git log --oneline" className="relative">
                        <ul className="space-y-1 text-sm">
                            {commits.map((commit, index) => {
                                const current = commit.experience === active;
                                return (
                                    <li key={commit.text} className={`-mx-2 rounded-md px-2 py-0.5 transition-colors duration-200 ${current ? "bg-ink text-paper" : ""}`}>
                                        <span className={current ? "text-accent-on-dark" : "text-accent-on-light"}>{shortHash(commit.text)}</span>{" "}
                                        {index === 0 && <span className="font-bold">(HEAD → main) </span>}
                                        <span className="opacity-80">feat: {commit.text}</span>
                                    </li>
                                );
                            })}
                            <li className="py-0.5 opacity-60">0000000 init: Hola, mundo</li>
                        </ul>
                    </Terminal>
                </div>
                <Timesline times={experiences} />
            </div>
        </Section>
    );
};
