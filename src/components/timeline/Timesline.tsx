import type React from "react";
import type { Time } from "./Times";

interface TimeslineProps {
    times: Time[];
}

export const Timesline: React.FC<TimeslineProps> = ({ times }) => {
    return (
        <ol className="relative ml-3 space-y-10 border-l-[3px] border-ink">
            {times.map((time) => (
                <li key={`${time.title}-${time.year}`} className="relative pl-8 md:pl-12">
                    <span aria-hidden className="absolute top-8 -left-[13px] size-[23px] rounded-full border-[3px] border-ink bg-terracotta-500" />
                    <article className="press rounded-2xl border-[3px] border-ink bg-white p-6 shadow-brutal md:p-8">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <span className="font-serif text-5xl italic text-terracotta-600">{time.year}</span>
                            <span className="rounded-full bg-ink px-3 py-1 font-mono text-xs text-paper md:text-sm">{time.duration}</span>
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{time.title}</h3>
                        {time.clients?.map((client) => (
                            <p key={client.name} className="mt-1 font-mono text-sm text-terracotta-700">
                                cliente → {client.name}{client.duration && <span className="text-ink/60"> · {client.duration}</span>}
                            </p>
                        ))}
                        <p className="mt-3 leading-relaxed text-ink/75">{time.details}</p>
                        {time.stack && (
                            <ul className="mt-5 flex flex-wrap gap-2">
                                {time.stack.map((tech) => (
                                    <li key={tech} className="rounded-full border-2 border-ink px-3 py-0.5 text-sm font-medium">{tech}</li>
                                ))}
                            </ul>
                        )}
                    </article>
                </li>
            ))}
        </ol>
    );
};
