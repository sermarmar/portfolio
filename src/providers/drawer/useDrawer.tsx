import { useContext } from "react";
import { DrawerContext } from "./DrawerContext";

export const useDrawer = () => {
    const context = useContext(DrawerContext);

    if(!context) {
        throw new Error("useDrawer debe usarse dentro DrawerProvider");
    }
    return context;
}