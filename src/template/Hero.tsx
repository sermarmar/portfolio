import type React from "react";
import { useRef } from "react";
import { Circled } from "../components/commons/Circled";
import { ContactBar } from "../components/ContactBar";
import { Folder } from "../components/Folder";
import { profile } from "../data/profile";
import { gsap, motionOk, SplitText, useGSAP } from "../lib/gsap";

export const Hero: React.FC = () => {
    const ref = useRef<HTMLElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add(motionOk, () => {
            const title = SplitText.create("[data-hero=title]", { type: "chars", aria: "none" });

            gsap.timeline({ defaults: { ease: "expo.out" }, onComplete: () => title.revert() })
                .from("[data-hero=folder]", { y: 80, rotation: -6, autoAlpha: 0, duration: 0.9, ease: "back.out(1.4)" })
                .from(title.chars, { yPercent: 70, autoAlpha: 0, duration: 0.9, stagger: 0.035 }, 0.1)
                .from("[data-hero=intro]", { y: 16, autoAlpha: 0, duration: 0.7 }, 0.35)
                .from("[data-hero=sheet]", { y: 90, duration: 0.7 }, 0.45)
                .from("[data-hero=year] [aria-hidden]", { rotation: -120, autoAlpha: 0, duration: 0.6, stagger: 0.06 }, 0.5)
                .from("[data-hero=tag]", { scale: 0.4, rotation: 14, autoAlpha: 0, duration: 0.5, stagger: 0.08, ease: "back.out(2.2)" }, 0.7)
                .from("[data-hero=path]", { autoAlpha: 0, duration: 0.2 }, ">-0.2")
                .from("[data-hero=path]", { text: "", duration: 0.6, ease: "none" });
        });
    }, { scope: ref });

    return (
        <section ref={ref} id="home" className="relative flex min-h-svh flex-col overflow-hidden bg-ink px-5 pt-24 pb-6 text-paper md:px-10 md:pt-28 lg:px-16">
            <div aria-hidden className="absolute -top-[23rem] right-[calc(10%-15rem)] size-[58rem] bg-radial-[closest-side] from-terracotta-500/25 via-terracotta-500/13 via-45% to-transparent" />
            <div aria-hidden className="absolute -bottom-[12rem] -left-[17rem] size-[44rem] bg-radial-[closest-side] from-terracotta-700/22 via-terracotta-700/11 via-45% to-transparent" />

            <ContactBar />

            <div className="relative grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1fr_1.4fr]">
                <div className="order-2 lg:order-1">
                    <p data-hero="intro" className="text-2xl leading-tight md:text-4xl">
                        {profile.name} —<br />
                        <em className="font-serif">Ingeniero</em> de Software
                    </p>
                </div>
                <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                    <Folder tags={profile.tags} path={`~/${profile.handle.toLowerCase()}/portfolio`} />
                </div>
            </div>

            <div className="relative z-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 lg:-mt-[6vw]">
                <h1 className="text-[25vw] md:text-[clamp(4.5rem,19vw,19rem)] font-bold leading-[0.78] tracking-tighter">
                    <span className="sr-only">{profile.name}, {profile.role}. Portfolio</span>
                    <span aria-hidden data-hero="title" className="whitespace-nowrap">
                        Port<span className="font-serif font-normal italic tracking-normal [paint-order:stroke_fill] [-webkit-text-stroke:0.06em_var(--color-ink)]">folio</span>
                    </span>
                </h1>
                <div className="mb-[1.5vw] flex flex-col items-end gap-2">
                    <span className="text-sm md:text-lg">Versión v.1.0</span>
                    <span data-hero="year" className="text-3xl md:text-5xl">
                        <Circled text={profile.year} bold className="border-terracotta-500 text-terracotta-500" />
                    </span>
                </div>
            </div>
        </section>
    );
};
