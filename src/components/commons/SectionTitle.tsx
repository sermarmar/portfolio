import type React from "react";
import { useRef } from "react";
import { gsap, motionOk, SplitText, useGSAP } from "../../lib/gsap";
import { Circled } from "./Circled";
import type { Tone } from "./Section";

const digits: Record<Tone, string> = {
    ink: "bg-terracotta-500 border-terracotta-500 text-ink",
    paper: "bg-ink border-ink text-paper",
    accent: "bg-ink border-ink text-terracotta-500",
};

const prompts: Record<Tone, string> = {
    ink: "text-accent-on-dark",
    paper: "text-accent-on-light",
    accent: "font-bold text-ink",
};

const commands: Record<Tone, string> = {
    ink: "text-paper/70",
    paper: "text-ink/70",
    accent: "text-on-accent-muted",
};

interface SectionTitleProps {
    kicker: string;
    title: string;
    accent: string;
    number: string;
    tone: Tone;
    as?: "h1" | "h2";
    reveal?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ kicker, title, accent, number, tone, as: Heading = "h2", reveal = false }) => {
    const ref = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!reveal) return;
        const q = gsap.utils.selector(ref);
        const mm = gsap.matchMedia();

        mm.add(motionOk, () => {
            const split = SplitText.create(q("[data-reveal=title]"), { type: "chars" });
            const accentChars = split.chars.filter((char) => char.closest("[data-reveal=accent]"));
            const titleChars = split.chars.filter((char) => !accentChars.includes(char));

            gsap.timeline({
                defaults: { ease: "expo.out" },
                scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
                onComplete: () => split.revert(),
            })
                .from(q("[data-reveal=prompt]"), { x: -12, autoAlpha: 0, duration: 0.4 })
                .from(q("[data-reveal=command]"), { text: "", duration: 0.5, ease: "none" }, 0.1)
                .from(titleChars, { yPercent: 90, autoAlpha: 0, duration: 0.9, stagger: 0.03 }, 0.15)
                .from(accentChars, { yPercent: -90, rotation: -12, autoAlpha: 0, duration: 0.9, stagger: 0.03 }, 0.35)
                .from(q("[data-reveal=rule]"), { scaleX: 0, transformOrigin: "left center", duration: 0.8, ease: "power3.inOut" }, 0.3)
                .from(q("[data-reveal=number] [aria-hidden]"), { scale: 0, rotation: -180, duration: 0.7, stagger: 0.08, ease: "back.out(2)" }, 0.6);
        });
    }, { scope: ref, dependencies: [reveal] });

    return (
        <header ref={ref} className="relative z-10 mb-12 md:mb-20">
            <p className="font-mono text-sm md:text-base mb-3">
                <span aria-hidden data-reveal="prompt" className={`inline-block ${prompts[tone]}`}>$</span> <span data-reveal="command" className={commands[tone]}>{kicker}</span>
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <Heading data-reveal="title" className="text-[clamp(3rem,7vw,7rem)] leading-[0.9] font-semibold tracking-tighter">
                    {title} <span data-reveal="accent" className="font-serif italic font-normal tracking-normal">{accent}</span>
                </Heading>
                <span aria-hidden data-reveal="rule" className="hidden md:block flex-1 min-w-16 h-[3px] bg-current" />
                <span data-reveal="number" className="text-4xl md:text-6xl">
                    <Circled text={number} bold className={digits[tone]} />
                </span>
            </div>
        </header>
    );
};
