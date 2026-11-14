import type React from "react";
import { useRef } from "react";
import { gsap, motionOk, useGSAP } from "../lib/gsap";

interface TextWriterProps {
    texts: string[];
}

export const TextWriter: React.FC<TextWriterProps> = ({ texts }) => {
    const ref = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add(motionOk, () => {
            const timeline = gsap.timeline({ repeat: -1, defaults: { ease: "none" } }).set(ref.current, { text: "" });
            texts.forEach((word) => {
                timeline
                    .to(ref.current, { text: word, duration: word.length * 0.15 })
                    .to(ref.current, { text: { value: "", rtl: true }, duration: word.length * 0.08 }, "+=2");
            });
        });
    }, { scope: ref, dependencies: [texts] });

    return (
        <>
            <span className="sr-only">{new Intl.ListFormat("es", { type: "conjunction" }).format(texts)}</span>
            <span ref={ref} aria-hidden className="animate-typing border-r-4 border-accent-on-light pr-1">
                {texts.at(-1)}
            </span>
        </>
    );
};
