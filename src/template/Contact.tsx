import type React from "react";
import { Terminal } from "../components/commons/Terminal";
import { ContactBar } from "../components/ContactBar";
import { profile } from "../data/profile";

const channels = [
    { command: "open mail", label: profile.email, href: `mailto:${profile.email}` },
    { command: "open github", label: profile.github, href: `https://${profile.github}` },
    { command: "open linkedin", label: profile.linkedin, href: `https://${profile.linkedin}` },
];

export const Contact: React.FC = () => {
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

                <div className="relative mx-auto w-full max-w-md">
                    <div aria-hidden className="absolute -top-8 -right-6 size-36 rounded-full border-2 border-paper bg-terracotta-500" />
                    <Terminal title="contacto.sh" tone="dark" className="relative">
                        <ul className="space-y-3">
                            {channels.map((channel) => (
                                <li key={channel.command}>
                                    <p><span className="text-terracotta-400">❯</span> {channel.command}</p>
                                    <a href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="break-all opacity-70 transition hover:text-terracotta-400 hover:opacity-100">
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
                <a href="#home" className="hover:text-terracotta-400">Volver arriba ↑</a>
            </footer>
        </section>
    );
};
