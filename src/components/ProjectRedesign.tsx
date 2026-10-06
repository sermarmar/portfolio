import type React from "react";
import { useState } from "react";
import type { Project } from "../data/profile";
import { BeforeAfter } from "./BeforeAfter";

export const ProjectRedesign: React.FC<{ redesign: NonNullable<Project["redesign"]> }> = ({ redesign }) => {
    const [selected, setSelected] = useState(0);
    const screen = redesign.screens[selected];

    return (
        <div className="mt-24">
            <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_2fr]">
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-tighter">
                    Re<span className="font-serif font-normal italic tracking-normal">diseño</span>
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-ink/80">
                    {redesign.text.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>

            <div role="tablist" aria-label="Pantallas del rediseño" className="mb-6 flex flex-wrap gap-2">
                {redesign.screens.map((item, index) => (
                    <button
                        key={item.label}
                        type="button"
                        role="tab"
                        aria-selected={index === selected}
                        onClick={() => setSelected(index)}
                        className={`rounded-full border-[3px] border-ink px-4 py-1.5 text-sm font-semibold transition-colors ${index === selected ? "bg-ink text-paper" : "hover:bg-terracotta-500"}`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <BeforeAfter before={screen.before} after={screen.after} label={screen.label} />
            <p className="mt-4 font-mono text-sm opacity-70">← Arrastra la línea para comparar →</p>
        </div>
    );
};
