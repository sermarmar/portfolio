import type React from "react";
import retroPc from "../assets/retro-pc.webp";

const ink = "#121212";
const paper = "#f4f1ea";
const terracotta = { 300: "#fbafa0", 500: "#f35e40", 700: "#bc3520" };

const photoFilter = [
    "grayscale(1)",
    "contrast(1.15)",
    `drop-shadow(3px 0 0 ${ink})`,
    `drop-shadow(-3px 0 0 ${ink})`,
    `drop-shadow(0 3px 0 ${ink})`,
    `drop-shadow(0 -3px 0 ${ink})`,
    `drop-shadow(10px 10px 0 ${ink})`,
].join(" ");

const sunStripes = 6;
const sunStripeDuration = 6;

const horizon = 420;
const floorDepth = 600 - horizon;
const floorFar = 4;
const floorStep = 0.5;
const floorCell = 80;
const floorPeriod = 1.4;
const floorLines = Array.from({ length: (floorFar - 1) / floorStep }, (_, j) => j);
const floorRays = Array.from({ length: 31 }, (_, i) => i - 15);
const floorSteps = Array.from({ length: 9 }, (_, i) => 1 - i / 8);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const depth = (line: number, offset: number) => 1 + floorStep * (line + offset);
const project = (z: number) => horizon + (floorDepth * (1 / z - 1 / floorFar)) / (1 - 1 / floorFar);
const lineOpacity = (z: number) => 0.45 + (0.55 * (floorFar - z)) / (floorFar - 1);

const Sparkle: React.FC<{ x: number; y: number; size: number; fill: string }> = ({ x, y, size, fill }) => (
    <path d={`M${x} ${y - size}Q${x} ${y} ${x + size} ${y}Q${x} ${y} ${x} ${y + size}Q${x} ${y} ${x - size} ${y}Q${x} ${y} ${x} ${y - size}Z`} fill={fill} />
);

export const RetroComputer: React.FC = () => {
    return (
        <div className="relative aspect-square w-full">
            <svg viewBox="0 0 600 600" className="absolute inset-0 size-full" aria-hidden>
                <defs>
                    <clipPath id="retro-sun">
                        <circle cx="390" cy="190" r="140" />
                    </clipPath>
                    <linearGradient id="retro-sun-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor={terracotta[300]} />
                        <stop offset="0.6" stopColor={terracotta[500]} />
                        <stop offset="1" stopColor={terracotta[700]} />
                    </linearGradient>
                    <linearGradient id="retro-fade-x" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff" stopOpacity="0" />
                        <stop offset="0.12" stopColor="#fff" />
                        <stop offset="0.88" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="retro-fade-y" x1="0" y1={horizon} x2="0" y2="600" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="0.75" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <mask id="retro-mask-x" maskUnits="userSpaceOnUse" x="0" y="0" width="600" height="600">
                        <rect width="600" height="600" fill="url(#retro-fade-x)" />
                    </mask>
                    <mask id="retro-mask-y" maskUnits="userSpaceOnUse" x="0" y="0" width="600" height="600">
                        <rect y={horizon} width="600" height={600 - horizon} fill="url(#retro-fade-y)" />
                    </mask>
                </defs>

                <g clipPath="url(#retro-sun)">
                    <rect x="250" y="50" width="280" height="280" fill="url(#retro-sun-fill)" />
                    {Array.from({ length: sunStripes }, (_, i) => {
                        const progress = i / sunStripes;
                        return (
                            <rect
                                key={i}
                                x="250"
                                width="280"
                                height="12"
                                fill={paper}
                                className="motion-safe:animate-sun-stripe"
                                style={{
                                    transform: `translateY(${80 + 120 * progress}px) scaleY(${0.1 + 0.9 * progress})`,
                                    animationDelay: `${-progress * sunStripeDuration}s`,
                                }}
                            />
                        );
                    })}
                </g>
                <circle cx="390" cy="190" r="140" fill="none" stroke={ink} strokeWidth="4" />

                <g mask="url(#retro-mask-x)">
                    <g mask="url(#retro-mask-y)" stroke={terracotta[700]} opacity="0.75">
                        {floorRays.map((x) => (
                            <line key={x} x1={300 + (x * floorCell) / floorFar} y1={horizon} x2={300 + x * floorCell} y2="600" strokeWidth="1.5" />
                        ))}
                        {floorLines.map((k) => (
                            <line key={k} x1="0" x2="600" strokeWidth="2" transform={`translate(0 ${project(depth(k, 0.5))})`} opacity={lineOpacity(depth(k, 0.5))}>
                                {!reduceMotion && (
                                    <>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            dur={`${floorPeriod}s`}
                                            repeatCount="indefinite"
                                            values={floorSteps.map((s) => `0 ${project(depth(k, s)).toFixed(2)}`).join(";")}
                                        />
                                        <animate
                                            attributeName="opacity"
                                            dur={`${floorPeriod}s`}
                                            repeatCount="indefinite"
                                            values={floorSteps.map((s) => lineOpacity(depth(k, s)).toFixed(3)).join(";")}
                                        />
                                    </>
                                )}
                            </line>
                        ))}
                    </g>
                    <line x1="0" y1={horizon} x2="600" y2={horizon} stroke={ink} strokeWidth="2" />
                </g>

                <Sparkle x={60} y={110} size={18} fill={ink} />
                <Sparkle x={210} y={70} size={10} fill={terracotta[500]} />
                <Sparkle x={565} y={120} size={12} fill={ink} />
                <Sparkle x={578} y={340} size={14} fill={terracotta[500]} />
                <Sparkle x={26} y={480} size={10} fill={ink} />
            </svg>

            <div className="@container absolute bottom-[5%] left-[6%] aspect-[707/554] w-[88%]">
                <div className="absolute inset-0" style={{ filter: photoFilter }}>
                    <img src={retroPc} alt="Ordenador retro de los 80 con la marca SERMAR.DEV" className="size-full -scale-x-100" />
                    <span className="absolute top-[72.9%] left-[70.6%] flex h-[3.4%] w-[8.2%] skew-y-[9.5deg] items-center justify-center rounded-sm bg-[#9d957e] text-[1.25cqw] leading-none font-bold tracking-tight whitespace-nowrap text-[#2b2924] shadow-[0_0_3px_2px_#9d957e]">
                        SERMAR.DEV
                    </span>
                </div>
            </div>
        </div>
    );
};
