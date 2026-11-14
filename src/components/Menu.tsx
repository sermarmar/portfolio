import type React from "react";
import { Link } from "react-router";
import { listMenu } from "../data/profile";

interface MenuProps {
    active: string | null;
}

export const Menu: React.FC<MenuProps> = ({ active }) => {
    return (
        <div className="max-lg:hidden flex gap-x-1 xl:gap-x-2 text-[15px] font-medium text-ink">
            {listMenu.map((item) => (
                <Link
                    key={item.id}
                    to={`/#${item.id}`}
                    aria-current={active === item.id ? "location" : undefined}
                    className="rounded-full border-2 border-transparent px-3 py-1.5 transition-colors hover:border-ink hover:bg-terracotta-500 aria-[current=location]:border-ink aria-[current=location]:bg-ink aria-[current=location]:text-paper"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
};
