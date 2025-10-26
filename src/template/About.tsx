import React from "react";

export const About: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen" id="about">
            <div className="w-3xl">
                <h2 className="text-9xl text-center mb-5">Sobre mí</h2>
                <p className="text-lg">
                    Soy Sergio Martín Martín (sí, el apellido viene en combo x2 🎮). <br />
                    Mi obsesión sana: el desarrollo FullStack (frontend que enamora, backend que no colapsa, ¡lo tengo todo!). <br />
                    Estudié informática, pero mi superpoder 🦸 es ser autodidacta de corazón: aprendo frameworks como si fueran memes virales y domino tecnologías nuevas más rápido que un TikTok. 🚀
                    ¿Mi prueba de fuego? He cocinado apps con React (sí, ese framework que convierte componentes en LEGOs de código 🧱✨), sazonado con Java (el superhéroe de "escribo una vez, resuelvo mil problemas" 🦸💻) y un toque de Python (porque, ¿quién no quiere un lenguaje que parece un hechizo de Harry Potter? 🐍⚡). <br />
                    Traducción: transformo café ☕ en interfaces que hipnotizan, lógica que escala montañas de datos 🏔️ y clientes que pasan del "¡esto es imposible!" al "¡ERES BRUJO!". 🧙🔥
                </p>
            </div>
        </div>
    );
};