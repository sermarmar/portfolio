import type React from "react";
import { Circled } from "../components/commons/Circled";
import { ContactBar } from "../components/ContactBar";
import { Folder } from "../components/Folder";
import { profile } from "../data/profile";

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative flex min-h-svh flex-col overflow-hidden bg-ink px-5 pt-24 pb-6 text-paper md:px-10 md:pt-28 lg:px-16">
            <div aria-hidden className="absolute -top-[23rem] right-[calc(10%-15rem)] size-[58rem] bg-radial-[closest-side] from-terracotta-500/25 via-terracotta-500/13 via-45% to-transparent" />
            <div aria-hidden className="absolute -bottom-[12rem] -left-[17rem] size-[44rem] bg-radial-[closest-side] from-terracotta-700/22 via-terracotta-700/11 via-45% to-transparent" />

            <ContactBar />

            <div className="relative grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1fr_1.4fr]">
                <div className="order-2 lg:order-1">
                    <p className="text-2xl leading-tight md:text-4xl">
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
                    <span className="sr-only">{profile.name}, {profile.role}. </span>
                    Port<span className="font-serif font-normal italic tracking-normal [paint-order:stroke_fill] [-webkit-text-stroke:0.06em_var(--color-ink)]">folio</span>
                </h1>
                <div className="mb-[1.5vw] flex flex-col items-end gap-2">
                    <span className="text-sm md:text-lg">Versión v.1.0</span>
                    <span className="text-3xl md:text-5xl">
                        <Circled text={profile.year} bold className="border-terracotta-500 text-terracotta-500" />
                    </span>
                </div>
            </div>
        </section>
    );
};
