import type React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { listMenu } from "../data/profile";
import { gsap, motionOk, useGSAP } from "../lib/gsap";
import { useDrawer } from "../providers/drawer/useDrawer";

interface DrawerProps {
    active: string | null;
}

export const Drawer: React.FC<DrawerProps> = ({ active }) => {
    const { isOpen, setIsOpen } = useDrawer();
    const asideRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const close = () => setIsOpen(false);

    useEffect(() => {
        if (!isOpen) return;
        const opener = document.activeElement as HTMLElement | null;
        closeRef.current?.focus();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") return setIsOpen(false);
            if (event.key !== "Tab" || !asideRef.current) return;

            const focusables = asideRef.current.querySelectorAll<HTMLElement>("a[href], button");
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            const current = document.activeElement;

            if (!asideRef.current.contains(current) || (event.shiftKey && current === first)) {
                event.preventDefault();
                (event.shiftKey ? last : first).focus();
            } else if (!event.shiftKey && current === last) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            opener?.focus({ preventScroll: true });
        };
    }, [isOpen, setIsOpen]);

    useGSAP(() => {
        if (!isOpen) return;
        const mm = gsap.matchMedia();
        mm.add(motionOk, () => {
            gsap.from("li", { x: -32, opacity: 0, duration: 0.5, stagger: 0.05, delay: 0.12, ease: "expo.out" });
        });
    }, { scope: listRef, dependencies: [isOpen], revertOnUpdate: true });

    return (
        <div className="lg:hidden">
            <div
                onClick={close}
                className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />
            <aside
                ref={asideRef}
                role="dialog"
                aria-modal="true"
                aria-label="Menú"
                inert={!isOpen}
                className={`fixed top-0 left-0 z-50 flex h-full w-80 max-w-[85vw] flex-col border-r-[3px] border-ink bg-paper transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0 shadow-brutal" : "-translate-x-full"}`}
            >
                <div className="flex items-center justify-between border-b-[3px] border-ink p-4">
                    <span className="font-mono text-xl font-bold"><span className="text-accent-on-light">&gt;</span> SermarDev</span>
                    <button
                        ref={closeRef}
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
                <ul ref={listRef} className="flex flex-1 flex-col justify-center gap-6 px-8">
                    {listMenu.map((item, index) => (
                        <li key={item.id}>
                            <Link
                                to={`/#${item.id}`}
                                onClick={close}
                                aria-current={active === item.id ? "location" : undefined}
                                className="group flex items-baseline gap-3"
                            >
                                <span className="font-mono text-sm text-accent-on-light group-aria-[current=location]:font-bold">{String(index).padStart(2, "0")}</span>
                                <span className="font-serif text-4xl italic decoration-[3px] underline-offset-8 transition-colors group-hover:text-accent-on-light group-aria-[current=location]:underline">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};
