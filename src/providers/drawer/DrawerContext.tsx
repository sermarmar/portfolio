import { createContext } from "react";

interface DrawerContextProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);