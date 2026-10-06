import type React from "react";
import { useState } from "react";

interface BeforeAfterProps {
    before: string;
    after: string;
    label: string;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ before, after, label }) => {
    const [position, setPosition] = useState(50);

    return (
        <div className="relative select-none overflow-hidden rounded-2xl border-[3px] border-ink bg-paper shadow-brutal">
            <img src={before} alt={`${label} antes del rediseño`} loading="lazy" draggable={false} className="block w-full" />
            <img
                src={after}
                alt={`${label} después del rediseño`}
                loading="lazy"
                draggable={false}
                className="absolute inset-0 size-full object-cover"
                style={{ clipPath: `inset(0 0 0 ${position}%)` }}
            />

            <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-ink/85 px-3 py-1 font-mono text-xs text-paper">Antes</span>
            <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-terracotta-500 px-3 py-1 font-mono text-xs text-ink">Después</span>

            <div aria-hidden className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-paper shadow-[0_0_0_1px_var(--color-ink)]" style={{ left: `${position}%` }}>
                <span className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-ink bg-paper text-lg shadow-brutal-sm">
                    ↔
                </span>
            </div>

            {/* Un range invisible a todo el tamaño da arrastre con ratón y dedo, y flechas del teclado, sin gestionar eventos a mano */}
            <input
                type="range"
                min={0}
                max={100}
                value={position}
                onChange={(event) => setPosition(Number(event.target.value))}
                aria-label={`Comparar ${label} antes y después del rediseño`}
                className="absolute inset-0 size-full cursor-ew-resize touch-pan-y opacity-0"
            />
        </div>
    );
};
