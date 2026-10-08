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
    { title: "Frontend", folder: "frontend/", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Flutter", "Dart", "Riverpod"] },
    { title: "Backend", folder: "backend/", items: ["Java", "Spring Boot", "Node.js", "Arquitectura hexagonal"] },
    { title: "Datos y mensajería", folder: "data/", items: ["Oracle", "PostgreSQL", "Elastic", "Kafka", "RabbitMQ"] },
    { title: "Herramientas", folder: "tools/", items: ["Git", "Jenkins", "Azure DevOps", "Eclipse", "Claude Code", "Scrum"] },
    {
        title: "Cloud y despliegue",
        folder: "cloud/",
        items: ["Vercel", "Supabase", "Firebase", "OpenShift", "Docker"],
        note: "// mis proyectos personales: front en Vercel y backend en Supabase",
        wide: true,
    },
];

export interface Project {
    slug: string;
    title: string;
    accent: string;
    url: string;
    stack: string;
    year: string;
    role: string;
    overview: string;
    challenge: string;
    solution: string;
    features: string[];
    // La primera imagen hace de portada en la vista previa; el resto va a la galería.
    images: { src: string; alt: string }[];
    // Comparador antes/después: cada pantalla con su captura vieja y la nueva, del mismo tamaño.
    redesign?: {
        text: string[];
        screens: { label: string; before: string; after: string }[];
    };
    // null si el repositorio es privado: el botón «Ver código» sale desactivado.
    code: string | null;
    // null si no hay demo publicada: el botón «Ver demo» sale desactivado.
    demo: string | null;
}

export const projects: Project[] = [
    {
        slug: "quedamos",
        title: "Quedamos",
        accent: "app",
        url: "quedamos-app.vercel.app",
        stack: "Flutter · Supabase",
        year: "2026",
        role: "Fullstack",
        overview: "App de planes con amigos: cada uno pinta los días que puede, la app dice cuándo coincidís y los gastos del plan se reparten solos.",
        challenge: "Que un grupo pueda organizarse sin obligar a todos a crearse una cuenta, y sin que eso abra la puerta a ver los datos de otros grupos.",
        solution: "Flutter con Riverpod para Android, iOS y web; Supabase con sesiones anónimas que pasan a cuenta sin perder nada, Row Level Security en todas las tablas y Edge Functions para los avisos push y las compras.",
        features: [
            "Calendario compartido de disponibilidad y votación de fechas para cada plan.",
            "Gastos del grupo con liquidación sugerida: como mucho N-1 pagos para cuadrar.",
            "Notificaciones push con Firebase, en el móvil y en el navegador.",
            "Panel de administración web con métricas de uso, sugerencias y registro de errores.",
        ],
        images: [
            { src: "/proyectos/quedamos/dentro.webp", alt: "Inicio, calendario compartido y planes de un grupo en Quedamos" },
            { src: "/proyectos/quedamos/planes.webp", alt: "Crear un plan, ver quién viene y los avisos del grupo" },
            { src: "/proyectos/quedamos/grupo.webp", alt: "Grupos, gastos con liquidación sugerida y la tarifa Sin Excusas" },
            { src: "/proyectos/quedamos/entrada.webp", alt: "Pantallas de entrada de Quedamos: como invitado, con correo o con Google" },
            { src: "/proyectos/quedamos/admin.webp", alt: "Acceso al panel de administración de Quedamos" },
        ],
        code: null,
        demo: "https://quedamos-app.vercel.app",
    },
    {
        slug: "portfolio",
        title: "Portfolio",
        accent: "2026",
        url: "portfolio-wine-six-27.vercel.app",
        stack: "React · Tailwind",
        year: "2026",
        role: "Diseño + Dev",
        overview: "Mi portfolio personal planteado como una carpeta de proyectos, con estética neo-brutalista y glassmorphism sobre mi color terracota.",
        challenge: "Trasladar el lenguaje de un portfolio editorial de diseño a una web rápida, accesible y que funcione igual de bien en móvil.",
        solution: "Componentes React tipados, Tailwind v4 con tokens propios y despliegue continuo en Vercel.",
        features: [
            "Diseño neo-brutalista con glassmorphism y tokens propios en Tailwind v4.",
            "Navegación por secciones como si fuera un explorador de archivos.",
            "Página de detalle para cada proyecto con URL propia.",
            "Adaptado a móvil, con menú lateral y respeto a reduced motion.",
        ],
        images: [
            { src: "/proyectos/portfolio/inicio.webp", alt: "Portada del portfolio con la carpeta de proyectos" },
            { src: "/proyectos/portfolio/contenidos.webp", alt: "Tabla de contenido con el explorador de archivos" },
            { src: "/proyectos/portfolio/stack.webp", alt: "Stack tecnológico en tarjetas de cristal" },
            { src: "/proyectos/portfolio/proyectos.webp", alt: "Rejilla de proyectos destacados" },
            { src: "/proyectos/portfolio/detalle.webp", alt: "Página de detalle de un proyecto" },
        ],
        code: "https://github.com/sermarmar/portfolio",
        demo: "https://portfolio-wine-six-27.vercel.app",
    },
    {
        slug: "osmels-cake",
        title: "Osmel's",
        accent: "Cake",
        url: "osmelscake.com",
        stack: "Next.js · Supabase",
        year: "2026",
        role: "Fullstack",
        overview: "Tienda online de utensilios e ingredientes de repostería creativa: catálogo por categorías y marcas, fichas de producto, cesta, área de cliente y blog.",
        challenge: "Compartir una única base de datos entre la tienda y su panel de administración, con permisos por rol y un stock que no se descuadre cuando dos pedidos compiten por la misma unidad.",
        solution: "Next.js 16 con App Router y Server Components, Supabase con migraciones versionadas y tests pgTAP de permisos, stock y reembolsos, y caché del catálogo que se invalida al editar desde el panel.",
        features: [
            "Catálogo con filtros y paginación en la URL, para poder compartir cualquier búsqueda.",
            "SEO en cada página: metadatos, migas de pan y JSON-LD de producto, artículo y FAQ.",
            "Servicios de tartas y toppers personalizados con formulario y subida de fotos.",
            "Blog de recetas y tutoriales escrito en MDX.",
        ],
        images: [
            { src: "/proyectos/osmels-cake/inicio.webp", alt: "Portada de Osmel's Cake con la colección de mesas dulces" },
            { src: "/proyectos/osmels-cake/destacados.webp", alt: "Productos destacados en la página de inicio" },
            { src: "/proyectos/osmels-cake/producto.webp", alt: "Ficha de producto con precio, stock y botón de añadir a la cesta" },
            { src: "/proyectos/osmels-cake/tartas.webp", alt: "Página del servicio de tartas personalizadas" },
            { src: "/proyectos/osmels-cake/blog.webp", alt: "Blog de recetas y tutoriales" },
        ],
        code: null,
        demo: null,
    },
    {
        slug: "abyssal",
        title: "Abyssal",
        accent: "app",
        url: "task-build-app-flax.vercel.app",
        stack: "React · Supabase",
        year: "2026",
        role: "Fullstack",
        overview: "App personal de productividad y bienestar: tareas, hábitos, temporizador Pomodoro, mapa de actividades y panel de salud mental en un mismo dashboard.",
        challenge: "Juntar cuatro herramientas distintas en una sola app sin que el código acabe siendo un monolito difícil de mantener.",
        solution: "Arquitectura por features verticales con capas repositorio → servicio → componente, Supabase para la autenticación y los datos, y Zustand y contextos para el estado de cada módulo.",
        features: [
            "Tareas con estados, categorías y tablero de arrastrar y soltar.",
            "Hábitos con frecuencia diaria, semanal o por días, y registro de cumplimiento.",
            "Temporizador Pomodoro integrado en el dashboard.",
            "Panel de salud mental con gráficas de seguimiento.",
            "Mapa de actividades del año, al estilo de las contribuciones de GitHub.",
            "Modo demo con datos ficticios para las vistas previas de Vercel, que nunca llega a producción.",
        ],
        images: [
            { src: "/proyectos/abyssal/dashboard.webp", alt: "Dashboard rediseñado de Abyssal con resumen, mapa de actividades, salud mental, áreas de bienestar y Pomodoro" },
            { src: "/proyectos/abyssal/tareas.webp", alt: "Tablero de tareas por estados con tarjetas de estilo clay" },
            { src: "/proyectos/abyssal/habitos.webp", alt: "Hábitos del día con la semana para marcar los completados" },
            { src: "/proyectos/abyssal/configuracion.webp", alt: "Configuración de grupos con su color en esferas 3D" },
            { src: "/proyectos/abyssal/login.webp", alt: "Pantalla de inicio de sesión rediseñada de Abyssal" },
        ],
        redesign: {
            text: [
                "La primera versión usaba un verde corporativo con tarjetas planas. La rediseñé entera con un estilo clay 3D y una paleta pastel de ciruela, azul polvo, melocotón y rosa.",
                "Las ideas de UX/UI son mías: se las mandé a Claude con imágenes de referencia del estilo que buscaba, y con su ayuda las convertí en el nuevo sistema de diseño. Tokens del tema, sombras clay, sidebar blanca, una cabecera común y barra inferior en móvil, y el dashboard, las tareas, los hábitos, la configuración y el login rehechos.",
            ],
            screens: [
                { label: "Dashboard", before: "/proyectos/abyssal/antes/dashboard.webp", after: "/proyectos/abyssal/dashboard.webp" },
                { label: "Tareas", before: "/proyectos/abyssal/antes/tareas.webp", after: "/proyectos/abyssal/tareas.webp" },
                { label: "Hábitos", before: "/proyectos/abyssal/antes/habitos.webp", after: "/proyectos/abyssal/habitos.webp" },
                { label: "Configuración", before: "/proyectos/abyssal/antes/configuracion.webp", after: "/proyectos/abyssal/configuracion.webp" },
                { label: "Login", before: "/proyectos/abyssal/antes/login.webp", after: "/proyectos/abyssal/login.webp" },
            ],
        },
        code: "https://github.com/sermarmar/task-build-app",
        // Vista previa de develop, con datos ficticios: no hace falta cuenta para probarla.
        demo: "https://task-build-app-git-develop-sermarmars-projects.vercel.app",
    },
    {
        slug: "invitacion-digital",
        title: "Invitación",
        accent: "digital",
        url: "invitacion-digital-dusky.vercel.app",
        stack: "React · Next.js · Supabase",
        year: "2026",
        role: "Fullstack",
        overview: "Plataforma de invitaciones de boda online: cada pareja tiene su invitación con enlace propio y un panel para llevar las confirmaciones, los invitados y las mesas.",
        challenge: "Que cada pareja pueda personalizar su invitación sin tocar código y, aun así, poder hacer diseños exclusivos a medida para quien no se queda con ninguno del catálogo.",
        solution: "SPA en React con arquitectura hexagonal y Supabase. Cada diseño es un módulo que se carga bajo demanda y declara en su manifiesto paletas y tipografías, y los exclusivos los creo con ayuda de Claude. Delante, una landing en Next.js que sirve la app como fallback.",
        features: [
            "Catálogo de diseños con paleta, tipografía y orden de secciones a elegir.",
            "Diseños exclusivos por pareja hechos con ayuda de Claude, como el «Pasaporte de invitado», con la portada y las páginas animadas.",
            "Confirmación de asistencia desde el móvil, con acompañantes, niños y alergias.",
            "Panel de cliente para invitados, grupos y mesas, y panel de administración con modo soporte.",
        ],
        images: [
            { src: "/proyectos/invitacion-digital/pasaporte.webp", alt: "Diseño exclusivo «Pasaporte de invitado»: portada de cuero, visados, acuarela de la iglesia y confirmación de asistencia" },
            { src: "/proyectos/invitacion-digital/editor.webp", alt: "Editor de la invitación con el diseño exclusivo y su vista previa en vivo" },
            { src: "/proyectos/invitacion-digital/paneles.webp", alt: "Panel de administración con los clientes y panel de la pareja en modo soporte" },
            { src: "/proyectos/invitacion-digital/cliente.webp", alt: "Alta de invitados y configuración del salón para las mesas" },
            { src: "/proyectos/invitacion-digital/grupos.webp", alt: "Grupos de invitados y edición de la invitación desde el área de la pareja" },
            { src: "/proyectos/invitacion-digital/portal.webp", alt: "Landing de Invitación digital: «Tu boda, en un enlace»" },
            { src: "/proyectos/invitacion-digital/disenos.webp", alt: "Funcionalidades y catálogo de diseños en la landing" },
        ],
        code: null,
        demo: null,
    },
];

const startedCoding = 2017;
const coffeesPerDay = 1;
const workdaysPerYear = 220;

const yearsCoding = (Date.now() - new Date(startedCoding, 0, 1).getTime()) / (365.25 * 24 * 60 * 60 * 1000);
const coffees = Math.floor((yearsCoding * workdaysPerYear * coffeesPerDay) / 100) * 100;
const clientCount = experiences.reduce((total, { clients }) => total + (clients?.length ?? 0), 0);

export const stats = [
    { value: `${new Date().getFullYear() - startedCoding}+`, label: "años escribiendo código" },
    { value: `${projects.length + clientCount}`, label: "proyectos y clientes" },
    { value: `${coffees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}+`, label: "cafés convertidos en código" },
];
