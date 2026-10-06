import type React from "react";
import { Link } from "react-router";
import { useDrawer } from "../providers/drawer/useDrawer";
import { listMenu } from "../data/profile";

export const Drawer: React.FC = () => {
    const { isOpen, setIsOpen } = useDrawer();
    const close = () => setIsOpen(false);

    return (
        <div className="lg:hidden">
            <div
                onClick={close}
                className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />
            <aside
                inert={!isOpen}
                className={`fixed top-0 left-0 z-50 flex h-full w-80 max-w-[85vw] flex-col border-r-[3px] border-ink bg-paper transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0 shadow-brutal" : "-translate-x-full"}`}
            >
                <div className="flex items-center justify-between border-b-[3px] border-ink p-4">
                    <span className="font-mono text-xl font-bold"><span className="text-terracotta-600">&gt;</span> SermarDev</span>
                    <button
                        type="button"
                        aria-label="Cerrar menú"
                        onClick={close}
                        className="press grid size-11 place-items-center rounded-xl border-[3px] border-ink bg-paper shadow-brutal-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-1 flex-col justify-center gap-6 px-8">
                    {listMenu.map((item, index) => (
                        <li key={item.id}>
                            <Link to={`/#${item.id}`} onClick={close} className="group flex items-baseline gap-3">
                                <span className="font-mono text-sm text-terracotta-700">{String(index).padStart(2, "0")}</span>
                                <span className="font-serif text-4xl italic transition-colors group-hover:text-terracotta-600">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};
