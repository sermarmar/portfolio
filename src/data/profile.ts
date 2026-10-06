import type { Time } from "../components/timeline/Times";

// Datos de ejemplo: cambia los proyectos, las cifras de "stats" y los enlaces "#" por los reales.

export const profile = {
    name: "Sergio Martín",
    handle: "SermarDev",
    role: "Ingeniero de Software",
    year: "2026",
    location: "Móstoles (Madrid)",
    email: "sermarmar1995@gmail.com",
    github: "github.com/sermarmar",
    linkedin: "linkedin.com/in/sermarmar",
    tags: ["Software Engineer", "Fullstack Developer", "React · Java"],
    offices: ["Software", "Web", "Frontend", "Backend", "Fullstack"],
};

export const sections = [
    { id: "about", label: "Sobre mí", file: "sobre-mi.md" },
    { id: "experiencies", label: "Experiencia", file: "experiencia.json" },
    { id: "education", label: "Formación", file: "formacion.md" },
    { id: "tecnology", label: "Stack", file: "stack.ts" },
    { id: "projects", label: "Proyectos", file: "proyectos/" },
    { id: "contact", label: "Contacto", file: "contacto.sh" },
];

export const listMenu = [{ id: "home", label: "Inicio" }, ...sections];

export const about = [
    "Soy Sergio Martín Martín (sí, el apellido viene en combo x2 🎮).",
    "Mi obsesión sana: el desarrollo FullStack (frontend que enamora, backend que no colapsa, ¡lo tengo todo!).",
    "Estudié informática, pero mi superpoder 🦸 es ser autodidacta de corazón: aprendo frameworks como si fueran memes virales y domino tecnologías nuevas más rápido que un TikTok. 🚀 ¿Mi prueba de fuego? He cocinado apps con React (sí, ese framework que convierte componentes en LEGOs de código 🧱✨) y las he sazonado con Java (el superhéroe de \"escribo una vez, resuelvo mil problemas\" 🦸💻).",
    "Traducción: transformo café ☕ en interfaces que hipnotizan, lógica que escala montañas de datos 🏔️ y clientes que pasan del \"¡esto es imposible!\" al \"¡ERES BRUJO!\". 🧙🔥",
];

const startedCoding = 2017;

export const stats = [
    { value: `${new Date().getFullYear() - startedCoding}+`, label: "años escribiendo código" },
    { value: "20+", label: "proyectos entregados" },
    { value: "∞", label: "cafés convertidos en código" },
];

export const experiences: Time[] = [
    {
        year: "2023",
        title: "Ingeniero de Software en Babel",
        clients: [
            { name: "Unicaja", duration: "Marzo 2026 - Actualidad" },
            { name: "ING", duration: "Septiembre 2023 - Marzo 2026" },
        ],
        duration: "Septiembre 2023 - Actualidad",
        details: "Desde marzo de 2026 trabajo para Unicaja con Java y Spring Boot, y he aprendido a usar OpenShift y Elastic. Antes, en el área de préstamos de ING, desarrollaba siguiendo acuerdos de buenas prácticas y arquitectura hexagonal, con tests unitarios y de integración y revisión de código (PR) entre compañeros. Allí también ejercí de Scrum Master: gestionaba tareas y el burndown, convocaba daily, retro, planning y refinamiento, y refinaba historias del backlog para que el equipo llegara al objetivo.",
        stack: ["Java", "Spring Boot", "OpenShift", "Elastic", "Groovy", "Kafka", "Oracle", "Docker", "Azure DevOps", "React", "Next.js"],
    },
    {
        year: "2021",
        title: "Ingeniero de Software en Experis",
        clients: [{ name: "Acciona Mobility" }],
        duration: "Mayo 2021 - Septiembre 2023",
        details: "Migración de un monolito a microservicios multitenant, conviviendo con la arquitectura antigua mientras se daba servicio a un millón de usuarios y diez mil vehículos conectados en varios países. Arquitectura hexagonal y CQRS, programación reactiva con Spring WebFlux, tests unitarios y de integración con JUnit y Mockito, y revisión de pull requests del equipo.",
        stack: ["Java", "Spring Boot", "RabbitMQ", "Google Cloud", "Docker", "Kubernetes", "PostgreSQL", "Jenkins"],
    },
    {
        year: "2018",
        title: "Programador Web en Quental",
        clients: [{ name: "Cruz Roja" }],
        duration: "Diciembre 2018 - Mayo 2021",
        details: "Diseño funcional y técnico y programación frontend y backend: soporte de la aplicación, desarrollo del frontend y migración del monolito a servicios REST.",
        stack: ["Java", "Spring Boot", "JavaScript", "Hibernate", "Oracle"],
    },
    {
        year: "2017",
        title: "Programador Web en Agrupo Sistemas",
        clients: [{ name: "Telefónica" }],
        duration: "Diciembre 2017 - Noviembre 2018",
        details: "Proyectos individuales desde cero, programando frontend y backend: una aplicación de cita médica, una portada en WordPress y un panel de administración.",
        stack: ["Java", "Spring", "JavaScript", "AngularJS", "MySQL", "WordPress"],
    },
];

export const education = [
    { years: "2026", title: "Claude", level: "Curso de IA · Udemy" },
    { years: "2023", title: "React básico y avanzado", level: "Curso · Udemy (vía Babel)" },
    { years: "2017 - 2018", title: "Máster Java", level: "Máster · CICE" },
    { years: "2015 - 2017", title: "Desarrollo de Aplicaciones Web", level: "Ciclo Formativo de Grado Superior" },
    { years: "2012 - 2014", title: "Sistemas Microinformáticos y Redes", level: "Ciclo Formativo de Grado Medio" },
];

export const stack = [
    { title: "Frontend", folder: "frontend/", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
    { title: "Backend", folder: "backend/", items: ["Java", "Spring Boot", "Node.js", "Arquitectura hexagonal"] },
    { title: "Datos y mensajería", folder: "data/", items: ["Oracle", "PostgreSQL", "Elastic", "Kafka", "RabbitMQ"] },
    { title: "Herramientas", folder: "tools/", items: ["Git", "Jenkins", "Azure DevOps", "Eclipse", "Scrum"] },
    {
        title: "Cloud y despliegue",
        folder: "cloud/",
        items: ["Vercel", "Supabase", "OpenShift", "Docker"],
        note: "// mis proyectos personales: front en Vercel y backend en Supabase",
        wide: true,
    },
];

export const projects = [
    {
        title: "Portfolio",
        accent: "2026",
        url: "sermar.dev",
        stack: "React · Tailwind",
        year: "2026",
        role: "Diseño + Dev",
        overview: "Mi portfolio personal planteado como una carpeta de proyectos, con estética neo-brutalista y glassmorphism sobre mi color terracota.",
        challenge: "Trasladar el lenguaje de un portfolio editorial de diseño a una web rápida, accesible y que funcione igual de bien en móvil.",
        solution: "Componentes React tipados, Tailwind v4 con tokens propios y despliegue continuo en Vercel.",
        code: "#",
        demo: "#",
    },
    {
        title: "Gestor",
        accent: "de tareas",
        url: "tasks.sermar.dev",
        stack: "Spring Boot · React",
        year: "2025",
        role: "Fullstack",
        overview: "Aplicación de gestión de tareas por equipos con tableros, estados y notificaciones en tiempo real.",
        challenge: "Mantener la consistencia de los datos con muchos usuarios editando el mismo tablero a la vez.",
        solution: "API REST con Spring Boot y bloqueo optimista, frontend en React con actualizaciones optimistas y WebSockets.",
        code: "#",
        demo: "#",
    },
    {
        title: "Panel",
        accent: "Supabase",
        url: "panel.sermar.dev",
        stack: "React · Supabase",
        year: "2024",
        role: "Frontend",
        overview: "Dashboard de métricas para un pequeño negocio: ventas, clientes y stock en una sola vista.",
        challenge: "Pasar de hojas de cálculo sueltas a una fuente de datos única sin montar un backend propio.",
        solution: "Supabase con Row Level Security para la autenticación y los datos, y gráficos en React con filtros por fecha.",
        code: "#",
        demo: "#",
    },
];
