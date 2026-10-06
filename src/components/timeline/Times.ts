export interface Client {
    name: string;
    duration?: string;
}

export interface Time {
    year: string;
    title: string;
    clients?: Client[];
    duration: string;
    details: string;
    stack?: string[];
}
