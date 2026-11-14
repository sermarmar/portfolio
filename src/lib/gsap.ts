import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, TextPlugin);

// Las posiciones de los ScrollTrigger se calculan al crearlos: con las fuentes web ya cargadas cambian las alturas.
document.fonts.ready.then(() => ScrollTrigger.refresh());

export const motionOk = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, SplitText, useGSAP };
