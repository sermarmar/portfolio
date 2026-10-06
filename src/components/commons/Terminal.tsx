import type React from "react";

const tones = {
    light: "bg-white/25 text-ink",
    dark: "bg-white/[0.06] text-paper",
};

interface TerminalProps {
    title: string;
    children: React.ReactNode;
    tone?: keyof typeof tones;
    className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ title, children, tone = "light", className = "" }) => {
    const border = tone === "light" ? "border-ink/10" : "border-white/15";

    return (
        <div className={`glass relative rounded-3xl overflow-hidden ${tones[tone]} ${className}`}>
            <div className={`flex items-center gap-2 px-4 py-3 border-b-2 ${border}`}>
                <span className="size-3.5 rounded-full border-2 border-ink bg-terracotta-500" />
                <span className="size-3.5 rounded-full border-2 border-ink bg-paper" />
                <span className="size-3.5 rounded-full border-2 border-ink bg-ink outline outline-paper/40" />
                <span className="flex-1 text-center font-mono text-xs opacity-70 pr-14">{title}</span>
            </div>
            <div className="p-5 md:p-6 font-mono text-sm md:text-base leading-relaxed">
                {children}
            </div>
        </div>
    );
};
