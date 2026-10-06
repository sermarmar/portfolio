import { useEffect, useRef, useState } from "react";
import type React from "react";

const handles = [
    "-top-[5px] -left-[5px]",
    "-top-[5px] left-1/2 -translate-x-1/2",
    "-top-[5px] -right-[5px]",
    "top-1/2 -translate-y-1/2 -left-[5px]",
    "top-1/2 -translate-y-1/2 -right-[5px]",
    "-bottom-[5px] -left-[5px]",
    "-bottom-[5px] left-1/2 -translate-x-1/2",
    "-bottom-[5px] -right-[5px]",
];

const tones = {
    light: { frame: "text-terracotta-600", handle: "bg-paper" },
    dark: { frame: "text-paper/50 group-hover:text-terracotta-500", handle: "bg-ink" },
};

interface SelectionBoxProps {
    children: React.ReactNode;
    tone?: keyof typeof tones;
    label?: string;
    className?: string;
}

export const SelectionBox: React.FC<SelectionBoxProps> = ({ children, tone = "light", label, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!label || !ref.current) return;
        const observer = new ResizeObserver(([entry]) => {
            setSize({ width: Math.round(entry.contentRect.width), height: Math.round(entry.contentRect.height) });
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [label]);

    return (
        <div ref={ref} className={`relative ${className}`}>
            {label && (
                <span className="absolute -top-9 left-0 flex items-center gap-2 rounded-md border-2 border-ink bg-ink px-2 py-0.5 font-mono text-xs text-paper whitespace-nowrap">
                    <span className="text-terracotta-400">{label}</span>
                    <span className="opacity-60">{size.width} × {size.height}</span>
                </span>
            )}
            <span aria-hidden className={`pointer-events-none absolute inset-0 border-[1.5px] border-current transition-colors ${tones[tone].frame}`}>
                {handles.map((position) => (
                    <span key={position} className={`absolute size-2.5 border-[1.5px] border-current ${tones[tone].handle} ${position}`} />
                ))}
                <span className="absolute top-1/2 left-full -translate-y-1/2 flex items-center pl-[5px]">
                    <span className="w-3 h-[1.5px] bg-current" />
                    <span className={`size-2.5 rounded-full border-[1.5px] border-current ${tones[tone].handle}`} />
                </span>
            </span>
            {children}
        </div>
    );
};
