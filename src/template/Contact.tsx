import type React from "react";
import { useRef } from "react";
import { Terminal } from "../components/commons/Terminal";
import { ContactBar } from "../components/ContactBar";
import { profile } from "../data/profile";
import { gsap, motionOk, useGSAP } from "../lib/gsap";

const channels = [
    { command: "open mail", label: profile.email, href: `mailto:${profile.email}` },
    { command: "open github", label: profile.github, href: `https://${profile.github}` },
    { command: "open linkedin", label: profile.linkedin, href: `https://${profile.linkedin}` },
];

export const Contact: React.FC = () => {
    const terminalRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const terminal = terminalRef.current;
        if (!terminal) return;

        const mm = gsap.matchMedia();
        mm.add(motionOk, () => {
            const timeline = gsap.timeline({ scrollTrigger: { trigger: terminal, start: "top 75%", once: true } });
            gsap.utils.toArray<HTMLElement>("[data-channel]").forEach((channel) => {
                timeline
                    .from(channel.querySelector("[data-command]"), { text: "", duration: 0.45, ease: "none" })
                    .from(channel.querySelector("[data-output]"), { opacity: 0, y: 6, duration: 0.3, ease: "expo.out", clearProps: "all" });
            });

            // Si se llega a los enlaces con el teclado antes de que el terminal acabe de escribir, se muestran ya.
            const finish = () => timeline.progress(1);
            terminal.addEventListener("focusin", finish);
            return () => terminal.removeEventListener("focusin", finish);
        });
    }, { scope: terminalRef });

    return (
        <section id="contact" className="relative flex min-h-svh flex-col overflow-hidden bg-ink px-5 pt-28 pb-6 text-paper md:px-10 md:pt-32 lg:px-16">
            <div aria-hidden className="absolute -right-[20rem] bottom-[calc(25%-15rem)] size-[60rem] bg-radial-[closest-side] from-terracotta-500/26 via-terracotta-500/14 via-45% to-transparent" />

            <ContactBar />

            <div className="relative z-10 grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.2fr_1fr]">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-end">
                    <p className="max-w-md text-3xl leading-tight md:text-4xl">
                        Hagamos <code className="rounded-md border-2 border-paper/60 px-2 font-mono text-[0.75em]">git init</code> de algo{" "}
                        <em className="font-serif">nuevo</em> y <em className="font-serif">trabajemos</em> juntos.
                    </p>
                    <a href={`mailto:${profile.email}`} className="shrink-0 text-xl text-terracotta-500 underline-offset-4 hover:underline">
                        Escríbe<em className="font-serif">me</em> ↗
                    </a>
                </div>

                <div ref={terminalRef} className="relative mx-auto w-full max-w-md">
                    <div aria-hidden className="absolute -top-8 -right-6 size-36 rounded-full border-2 border-paper bg-terracotta-500" />
                    <Terminal title="contacto.sh" tone="dark" className="relative">
                        <ul className="space-y-3">
                            {channels.map((channel) => (
                                <li key={channel.command} data-channel>
                                    <p aria-hidden><span className="text-accent-on-dark">❯</span> <span data-command>{channel.command}</span></p>
                                    <a data-output href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="inline-block break-all opacity-70 transition hover:text-accent-on-dark hover:opacity-100">
                                        → {channel.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Terminal>
                </div>
            </div>

            <p className="relative z-10 text-[clamp(5rem,23vw,22rem)] font-bold leading-[0.78] tracking-tighter">
                ¡Gra<span className="font-serif font-normal italic tracking-normal text-terracotta-500">cias!</span>
            </p>

            <footer className="relative z-10 mt-12 flex flex-wrap justify-between gap-4 border-t-2 border-paper/20 pt-6 font-mono text-xs opacity-70 md:text-sm">
                <span>© {profile.year} {profile.name} — hecho con React, TypeScript y Tailwind</span>
                <a href="#home" className="hover:text-accent-on-dark">Volver arriba ↑</a>
            </footer>
        </section>
    );
};
