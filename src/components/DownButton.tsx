import { useEffect, useState } from "react"
import { Button } from "./commons/Button"
import { useWindowScroll } from "@uidotdev/usehooks";

interface DownButtonProps {
    sectionsNum: number;
}
export const DownButton: React.FC<DownButtonProps> = ({ sectionsNum }) => {
    const [section, setSection] = useState(1);
    const [isUp, setIsUp] = useState(false);
    
    const [{ x, y }, scrollTo] = useWindowScroll();

    useEffect(() => {
        handleScroll();
    }, [y])

    const retrieveMaxScroll = () => {
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        return documentHeight - windowHeight;
    }
    
    const handleScroll = () => {
        if(y !== null) {
            const currentSection = Math.ceil(y / window.innerHeight) + 1;
            setSection(currentSection);
            if (y >= retrieveMaxScroll()) {
                setIsUp(true);
            } else {
                setIsUp(false);
            }
        }
    }

    const handleClick = () => {
        const nextSection = section + 1;
        const nextElement = document.getElementById(`section${nextSection}`);
        
        if (nextElement) {
            nextElement.scrollIntoView({ behavior: 'smooth' });
            setSection(nextSection);
            if(nextSection === sectionsNum) {
                setIsUp(true);
            }
        } else {
            // Vuelve a la primera sección si no hay más
            const firstSection = document.getElementById('section1');
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: 'smooth' });
                setSection(1);
                setIsUp(false);
            }
        }
    };

    return (
        <div className={`fixed bottom-0 w-full flex justify-center mb-8 transition duration-500`}>
            <Button shape="rounded-full" isFast shadow onClick={() => handleClick()} className="animate-jump">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`size-6 transition duration-500 ${isUp ? 'rotate-180' : 'rotate-0'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </Button>
        </div>
        
    )
}