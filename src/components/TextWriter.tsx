import React, { useEffect } from "react";
import { useState } from "react";

interface TextWriterProps { 
    texts: string[];
}

export const TextWriter: React.FC<TextWriterProps> = ({ texts }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const animarTexto = async () => {
            // Escribir palabra
            for (let i = 0; i < texts[index].length; i++) {
                setDisplayedText(prev => prev + texts[index][i]);
                await new Promise(resolve => setTimeout(resolve, 200));
            }
      
            // Pausa después de escribir
            await new Promise(resolve => setTimeout(resolve, 2000));
      
            // Borrar palabra
            for (let i = texts[index].length; i > 0; i--) {
              setDisplayedText(prev => prev.slice(0, -1));
              await new Promise(resolve => setTimeout(resolve, 100));
            }
      
            // Pasar a siguiente palabra
            setIndex(prev => (prev + 1) % texts.length);
          };
      
        animarTexto();
    }, [index, texts]);

    return (
        <span className="animate-typing border-r-4 border-terracotta-600 pr-1">
            {displayedText}
        </span>
    );
}