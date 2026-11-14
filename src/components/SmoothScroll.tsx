import Lenis from "lenis";
import "lenis/dist/lenis.css";
import type React from "react";
import { useEffect } from "react";
import { gsap, motionOk, ScrollTrigger } from "../lib/gsap";

export const SmoothScroll: React.FC = () => {
    useEffect(() => {
        if (!window.matchMedia(motionOk).matches) return;

        const lenis = new Lenis({ anchors: true, stopInertiaOnNavigate: true });
        const raf = (time: number) => lenis.raf(time * 1000);

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(raf);

        return () => {
            gsap.ticker.remove(raf);
            lenis.destroy();
        };
    }, []);

    return null;
};
