import type React from "react";
import type { Project } from "../data/profile";

const gridBackground = "bg-terracotta-500 bg-[linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] bg-[size:32px_32px] @3xl:bg-[size:48px_48px]";

export const ProjectPreview: React.FC<{ project: Project }> = ({ project }) => {
    const [cover] = project.images;

    return (
        <div className="@container overflow-hidden rounded-2xl border-[3px] border-ink bg-paper shadow-brutal">
            <div className="flex items-center gap-1.5 border-b-[3px] border-ink px-3 py-2 @3xl:gap-2 @3xl:px-4 @3xl:py-3">
                <span className="size-3 rounded-full border-2 border-ink bg-terracotta-500 @3xl:size-3.5" />
                <span className="size-3 rounded-full border-2 border-ink bg-paper @3xl:size-3.5" />
                <span className="size-3 rounded-full border-2 border-ink bg-ink @3xl:size-3.5" />
                <span className="ml-2 flex-1 truncate rounded-full border-2 border-ink bg-white px-3 py-0.5 font-mono text-xs @3xl:ml-3 @3xl:px-4 @3xl:text-sm">
                    https://{project.url}
                </span>
            </div>
            <div className={`relative grid aspect-[16/10] place-items-center overflow-hidden @3xl:aspect-[16/7] ${cover ? "" : gridBackground}`}>
                {cover ? (
                    <img src={cover.src} alt={cover.alt} loading="lazy" className="absolute inset-0 size-full object-cover object-top" />
                ) : (
                    <>
                        <div aria-hidden className="absolute top-[8%] left-[14%] aspect-square w-[20%] rounded-full border-[3px] border-ink bg-paper @3xl:left-[22%] @3xl:w-[18%]" />
                        <div aria-hidden className="absolute right-[12%] bottom-[8%] aspect-square w-[16%] rotate-12 rounded-2xl border-[3px] border-ink bg-ink @3xl:right-[22%] @3xl:w-[14%] @3xl:rounded-3xl" />
                    </>
                )}
                <div className="glass relative rounded-2xl bg-white/25 px-6 py-4 text-center @3xl:rounded-3xl @3xl:px-14 @3xl:py-8">
                    <p className="text-3xl font-bold leading-none tracking-tighter @3xl:text-7xl">
                        {project.title} <span className="font-serif font-normal italic tracking-normal">{project.accent}</span>
                    </p>
                    <p className="mt-2 font-mono text-xs @3xl:text-sm">{project.stack}</p>
                </div>
            </div>
        </div>
    );
};
