import type React from "react";

interface CircledProps {
    text: string;
    className?: string;
}

export const Circled: React.FC<CircledProps> = ({ text, className = "" }) => {
    return (
        <span className="inline-flex gap-1" aria-label={text}>
            {text.split("").map((char, index) => (
                <span key={index} aria-hidden className={`inline-grid place-items-center size-[1.2em] rounded-full border-2 font-serif italic leading-none ${className}`}>
                    {char}
                </span>
            ))}
        </span>
    );
};
