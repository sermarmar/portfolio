import type React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({text, onClick}) => {
    return (
        <button className="px-4 py-2 rounded-sm bg-terracotta-600 text-white transition hover:bg-terracotta-800" onClick={onClick}>{ text }</button>
    )
}