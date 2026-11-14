import type React from "react";
import { useRef } from "react";
import { Section } from "../components/commons/Section";
import { SectionTitle } from "../components/commons/SectionTitle";
import { stack } from "../data/profile";
import { gsap, motionOk, ScrollTrigger, useGSAP } from "../lib/gsap";

export const Stack: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    // Las tarjetas siempre entran con un fundido para que el navegador tenga listo el backdrop-filter
    // antes de que se vean; si no, durante unos frames se pintan sin el desenfoque del cristal.
    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>("article", gridRef.current);
        const mm = gsap.matchMedia();

        mm.add({ motion: motionOk, reduce: "(prefers-reduced-motion: reduce)" }, ({ conditions }) => {
            gsap.set(cards, { autoAlpha: 0 });

            if (!conditions?.motion) {
                ScrollTrigger.batch(cards, { start: "top 88%", once: true, onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, duration: 0.6, stagger: 0.1 }) });
                return;
            }

            ScrollTrigger.batch(cards, {
                start: "top 88%",
                once: true,
                onEnter: (batch) => batch.forEach((card, index) => {
                    gsap.timeline({ delay: index * 0.15, defaults: { ease: "expo.out" } })
                        .to(card, { autoAlpha: 1, duration: 0.4, ease: "power1.out" })
                        .fromTo(card, { y: 60, clipPath: "inset(0% 0% 100% 0%)" }, { y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 1, clearProps: "transform,clipPath" }, 0)
                        .from(card.querySelector("[data-folder]"), { text: "", duration: 0.45, ease: "none" }, 0.25)
                        .from(card.querySelectorAll("li"), { scale: 0.5, autoAlpha: 0, duration: 0.5, stagger: 0.04, ease: "back.out(2.5)" }, 0.4);
                }),
            });

            gsap.from("[data-deco]", {
                scale: 0,
                duration: 0.9,
                ease: "elastic.out(1, 0.6)",
                scrollTrigger: { trigger: gridRef.current, start: "top 75%", once: true },
            });
        });
    }, { scope: gridRef });

    return (
        <Section id="tecnology" tone="ink">
            {/* Halos con degradado radial en vez de filter: blur(), que obligaba a recalcular un desenfoque enorme bajo cada tarjeta de cristal */}
            <div aria-hidden className="absolute top-[calc(50%-15rem)] left-[calc(25%-15rem)] size-[56rem] bg-radial-[closest-side] from-terracotta-500/27 via-terracotta-500/14 via-45% to-transparent" />
            <div aria-hidden className="absolute right-[calc(8%-11rem)] bottom-[calc(12%-11rem)] size-[38rem] bg-radial-[closest-side] from-terracotta-700/25 via-terracotta-700/12 via-45% to-transparent" />

            <SectionTitle kicker="cat stack.ts" title="Stack" accent="tecnológico" number="04" tone="ink" reveal />

            <div ref={gridRef} className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div aria-hidden data-deco className="absolute -top-10 left-[45%] size-36 rounded-full border-2 border-paper bg-terracotta-500 max-md:hidden" />
                {stack.map((group, index) => (
                    <article key={group.title} className={`glass relative flex flex-col rounded-3xl bg-white/[0.06] p-6 ${group.wide ? "md:col-span-2" : ""}`}>
                        <div className="flex items-center justify-between font-mono text-sm opacity-70">
                            <span data-folder>{group.folder}</span>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <h3 className="mt-6 mb-6 font-serif text-5xl italic">{group.title}</h3>
                        {group.note && <p className="-mt-3 mb-6 font-mono text-sm text-paper/70">{group.note}</p>}
                        <ul className="mt-auto flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li key={item} className="rounded-full border-2 border-paper/70 px-3 py-1 text-sm font-medium">
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
