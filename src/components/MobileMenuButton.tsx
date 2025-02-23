import { useState } from "react";
import { Button } from "./commons/Button";
import { Drawer } from "./Drawer";

export const MobileMenuButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button color="transparent" onClick={() => setIsOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </Button>
            
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}