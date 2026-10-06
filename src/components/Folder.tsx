import type React from "react";

const pillPositions = [
    "left-[10%] top-[40%] -rotate-6",
    "right-[6%] top-[37%] rotate-3",
    "left-[34%] top-[57%] -rotate-2",
];

interface FolderProps {
    tags: string[];
    path: string;
}

export const Folder: React.FC<FolderProps> = ({ tags, path }) => {
    return (
        <div className="relative w-full max-w-[640px] -rotate-3 animate-float">
            <svg viewBox="0 0 600 460" className="w-full h-auto drop-shadow-[10px_10px_0_var(--color-paper)]" aria-hidden>
                <g stroke="var(--color-ink)" strokeWidth="5" strokeLinejoin="round">
                    <path
                        d="M30 70Q30 45 55 45H215Q232 45 244 58L272 90H545Q570 90 570 115V420Q570 445 545 445H55Q30 445 30 420Z"
                        fill="var(--color-terracotta-700)"
                    />
                    <g transform="rotate(-3 300 220)">
                        <rect x="72" y="72" width="450" height="300" rx="12" fill="var(--color-paper)" />
                        <rect x="100" y="96" width="70" height="12" rx="6" fill="var(--color-terracotta-500)" strokeWidth="0" />
                        <rect x="180" y="96" width="140" height="12" rx="6" fill="var(--color-ink)" strokeWidth="0" />
                        <rect x="130" y="120" width="190" height="12" rx="6" fill="var(--color-ink)" opacity="0.3" strokeWidth="0" />
                        <rect x="330" y="120" width="70" height="12" rx="6" fill="var(--color-terracotta-500)" strokeWidth="0" />
                    </g>
                    <path
                        d="M16 168Q14 146 38 146H562Q586 146 584 168L564 422Q562 445 538 445H62Q38 445 36 422Z"
                        fill="var(--color-terracotta-500)"
                    />
                </g>
            </svg>

            {tags.map((tag, index) => (
                <span
                    key={tag}
                    className={`absolute ${pillPositions[index % pillPositions.length]} press rounded-full border-2 border-ink bg-paper px-[1em] py-[0.35em] text-[clamp(0.75rem,1.7vw,1.3rem)] font-medium text-ink shadow-brutal-sm whitespace-nowrap`}
                >
                    {tag}
                </span>
            ))}

            <span className="glass absolute left-[8%] bottom-[9%] rounded-full bg-white/30 px-3 py-1 font-mono text-[clamp(0.65rem,1.3vw,0.95rem)] text-ink">
                {path}
            </span>
        </div>
    );
};
