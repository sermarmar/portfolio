import type React from "react";
import { listMenu } from "../data/profile";

export const Menu: React.FC = () => {
    return (
        <div className="max-lg:hidden flex gap-x-1 xl:gap-x-2 text-[15px] font-medium text-ink">
            {listMenu.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-full border-2 border-transparent px-3 py-1.5 transition-colors hover:border-ink hover:bg-terracotta-500"
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
};
