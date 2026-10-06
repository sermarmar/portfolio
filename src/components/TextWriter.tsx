import React, { useEffect } from "react";
import { useState } from "react";

interface TextWriterProps { 
    texts: string[];
}

export const TextWriter: React.FC<TextWriterProps> = ({ texts }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let cancelled = false;
        const word = texts[index];
        const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        const animarTexto = async () => {
            // Escribir palabra
            for (let i = 1; i <= word.length; i++) {
                if (cancelled) return;
                setDisplayedText(word.slice(0, i));
                await wait(200);
            }

            // Pausa después de escribir
            await wait(2000);

            // Borrar palabra
            for (let i = word.length - 1; i >= 0; i--) {
                if (cancelled) return;
                setDisplayedText(word.slice(0, i));
                await wait(100);
            }

            // Pasar a siguiente palabra
            if (!cancelled) setIndex(prev => (prev + 1) % texts.length);
        };

        animarTexto();
        return () => { cancelled = true; };
    }, [index, texts]);

    return (
        <span className="animate-typing border-r-4 border-terracotta-600 pr-1">
            {displayedText}
        </span>
    );
}