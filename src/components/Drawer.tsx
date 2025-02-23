import { useEffect, useState } from "react";
import { Button } from "./commons/Button";

interface DrawerProps {
    isOpen: boolean;
    onClose?: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({isOpen, onClose}) => {
    const [open, setOpen] = useState(isOpen);
    const drawerClasses = open ? 'translate-x-0' : '-translate-x-full';

    useEffect(() => {
      setOpen(isOpen);
    }, [isOpen]);
    
    return (
        <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${drawerClasses}`}>
            <div className="flex py-4 px-2">
                <Button color="transparent" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                </Button>
            </div>
            <ul className="flex flex-col items-center justify-center h-full space-y-10">
                <li>
                    <a href="#" className="hover:text-terracotta-600">Inicio</a>
                </li>
                <li>
                    <a href="#" className="hover:text-terracotta-600">Sobre mí</a>
                </li>
                <li>
                    <a href="#" className="hover:text-terracotta-600">Tecnologías</a>
                </li>
                <li>
                    <a href="#" className="hover:text-terracotta-600">Proyectos</a>
                </li>
                <li>
                    <a href="#" className="hover:text-terracotta-600">Contacto</a>
                </li>
            </ul>            
        </div>
    )
}