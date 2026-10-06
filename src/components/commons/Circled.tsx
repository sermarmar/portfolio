import type React from "react";

interface CircledProps {
    text: string;
    bold?: boolean;
    className?: string;
}

export const Circled: React.FC<CircledProps> = ({ text, bold = false, className = "" }) => {
    const weight = bold ? "border-[0.1em] [-webkit-text-stroke:0.04em_currentColor]" : "border-2";

    return (
        <span className="inline-flex gap-1" aria-label={text}>
            {text.split("").map((char, index) => (
                <span key={index} aria-hidden className={`inline-grid place-items-center size-[1.2em] rounded-full font-serif italic leading-none ${weight} ${className}`}>
                    {char}
                </span>
            ))}
        </span>
    );
};
