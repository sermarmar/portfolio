import type React from "react";
import { useDrawer } from "../providers/drawer/useDrawer";

export const MobileMenuButton: React.FC = () => {
    const { setIsOpen } = useDrawer();

    return (
        <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setIsOpen(true)}
            className="press grid size-11 place-items-center rounded-xl border-[3px] border-ink bg-terracotta-500 text-ink shadow-brutal-sm"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    );
};
