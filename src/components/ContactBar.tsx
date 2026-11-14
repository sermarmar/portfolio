import type React from "react";
import { profile } from "../data/profile";

const links = [
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: profile.github, href: `https://${profile.github}` },
    { label: profile.linkedin, href: `https://${profile.linkedin}` },
    { label: profile.location },
];

export const ContactBar: React.FC = () => {
    return (
        <ul className="relative z-10 flex flex-wrap justify-between gap-x-6 gap-y-2 text-xs md:text-sm opacity-80">
            {links.map(({ label, href }) => (
                <li key={label} className="whitespace-nowrap">
                    {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:text-accent-on-dark transition-colors">
                            {label}
                        </a>
                    ) : label}
                </li>
            ))}
        </ul>
    );
};
