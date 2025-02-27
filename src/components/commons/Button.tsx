import type React from "react";

interface ButtonProps {
    children: React.ReactNode;
    color?: string;
    txColor?: string;
    shape?: 'rounded-full' | 'rounded-sm' | 'square';
    shadow?: boolean;
    isFast?: boolean;
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({children, color, txColor, shape, shadow, isFast, onClick, className}) => {
    const bgColor = color ? `bg-${color}` : "bg-terracotta-600";
    let textColor = txColor ? `text-${txColor}` : "text-white";
    let shapeForm = isFast ? 'px-5 py-5' : 'px-4 py-2';
    const hasShadow = shadow ? 'shadow-lg' : '';
    if(color && color === 'transparent') {
        textColor = 'text-gray-900';
    }

    return (
        <button className={`${shapeForm} ${shape} ${bgColor} ${textColor} ${hasShadow} transition hover:bg-terracotta-800 hover:text-gray-50 ${className}`} onClick={onClick}>
            { children }
        </button>
    )
}