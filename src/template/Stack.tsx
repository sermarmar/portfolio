import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Section } from "../components/commons/Section";
import { SectionTitle } from "../components/commons/SectionTitle";
import { stack } from "../data/profile";

export const Stack: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    // Las tarjetas aparecen con un fundido al entrar en pantalla para que el navegador tenga listo el backdrop-filter
    // antes de que se vean; si no, durante unos frames se pintan sin el desenfoque del cristal.
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        observer.observe(grid);
        return () => observer.disconnect();
    }, []);

    return (
        <Section id="tecnology" tone="ink">
            {/* Halos con degradado radial en vez de filter: blur(), que obligaba a recalcular un desenfoque enorme bajo cada tarjeta de cristal */}
            <div aria-hidden className="absolute top-[calc(50%-15rem)] left-[calc(25%-15rem)] size-[56rem] bg-radial-[closest-side] from-terracotta-500/27 via-terracotta-500/14 via-45% to-transparent" />
            <div aria-hidden className="absolute right-[calc(8%-11rem)] bottom-[calc(12%-11rem)] size-[38rem] bg-radial-[closest-side] from-terracotta-700/25 via-terracotta-700/12 via-45% to-transparent" />

            <SectionTitle kicker="// import { herramientas }" title="Stack" accent="tecnológico" number="04" tone="ink" />

            <div ref={gridRef} className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div aria-hidden className="absolute -top-10 left-[45%] size-36 rounded-full border-2 border-paper bg-terracotta-500 max-md:hidden" />
                {stack.map((group, index) => (
                    <article key={group.title} className={`glass relative flex flex-col rounded-3xl bg-white/[0.06] p-6 transition-[opacity,translate] duration-[700ms,300ms] hover:-translate-y-1 ${visible ? "" : "opacity-0"} ${group.wide ? "md:col-span-2" : ""}`}>
                        <div className="flex items-center justify-between font-mono text-sm opacity-70">
                            <span>{group.folder}</span>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <h3 className="mt-6 mb-6 font-serif text-5xl italic">{group.title}</h3>
                        {group.note && <p className="-mt-3 mb-6 font-mono text-sm text-terracotta-300">{group.note}</p>}
                        <ul className="mt-auto flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li key={item} className="rounded-full border-2 border-paper/70 px-3 py-1 text-sm font-medium transition-colors hover:border-ink hover:bg-terracotta-500 hover:text-ink">
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
