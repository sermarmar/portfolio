import type React from "react";
import { DrawerContext } from "./DrawerContext";
import { useState } from "react";

interface DrawerProviderProps {
    children: React.ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <DrawerContext.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>{ children }</DrawerContext.Provider>
    )

}