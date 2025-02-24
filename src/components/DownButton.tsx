import { Button } from "./commons/Button"

export const DownButton = () => {
    return (
        <div className="fixed bottom-0 w-full flex justify-center mb-8">
            <Button shape="rounded-full" isFast>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </Button>
        </div>
        
    )
}