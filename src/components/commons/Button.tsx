import type React from "react";

interface ButtonProps {
    children: React.ReactNode;
    color?: string;
    txColor?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({children, color, txColor, onClick}) => {
    const bgColor = color ? `bg-${color}` : "bg-terracotta-600";
    let textColor = txColor ? `text-${txColor}` : "text-white";
    if(color && color === 'transparent') {
        textColor = 'text-gray-900';
    }

    return (
        <button className={`px-4 py-2 rounded-sm ${bgColor} ${textColor} transition hover:bg-terracotta-800 hover:text-gray-50`} onClick={onClick}>{ children }</button>
    )
}