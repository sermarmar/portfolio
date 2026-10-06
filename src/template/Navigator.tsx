import type React from "react";
import { Drawer } from "../components/Drawer";
import { Menu } from "../components/Menu";
import { MobileMenuButton } from "../components/MobileMenuButton";
import { DrawerProvider } from "../providers/drawer/DrawerProvider";

export const Navigator: React.FC = () => {
    return (
        <DrawerProvider>
            <header className="fixed inset-x-3 top-3 z-40 md:inset-x-6 md:top-4">
                <nav aria-label="Global" className="glass relative mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full bg-paper/60 px-4 py-2.5 md:px-6">
                    <a href="#home" className="font-mono text-xl font-bold text-ink md:text-2xl">
                        <span className="text-terracotta-600">&gt;</span> SermarDev
                        <span className="ml-0.5 animate-typing border-r-[3px] border-terracotta-500" />
                    </a>
                    <Menu />
                    <div className="flex items-center gap-3">
                        <a href="#contact" className="press max-sm:hidden lg:max-xl:hidden rounded-full border-[3px] border-ink bg-terracotta-500 px-5 py-2 font-semibold text-ink shadow-brutal-sm">
                            Hablemos ↗
                        </a>
                        <div className="lg:hidden">
                            <MobileMenuButton />
                        </div>
                    </div>
                </nav>
            </header>
            <Drawer />
        </DrawerProvider>
    );
};
