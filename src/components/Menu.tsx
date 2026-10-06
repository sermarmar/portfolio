import type React from "react";
import { Link } from "react-router";
import { listMenu } from "../data/profile";

export const Menu: React.FC = () => {
    return (
        <div className="max-lg:hidden flex gap-x-1 xl:gap-x-2 text-[15px] font-medium text-ink">
            {listMenu.map((item) => (
                <Link
                    key={item.id}
                    to={`/#${item.id}`}
                    className="rounded-full border-2 border-transparent px-3 py-1.5 transition-colors hover:border-ink hover:bg-terracotta-500"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
};
