export declare const textVariant: (delay?: any) => {
    hidden: {
        y: number;
        opacity: number;
    };
    show: {
        y: number;
        opacity: number;
        transition: {
            type: string;
            duration: number;
            delay: any;
        };
    };
};
export declare const fadeIn: (direction: string, type: any, delay: any, duration: any) => {
    hidden: {
        x: number;
        y: number;
        opacity: number;
    };
    show: {
        x: number;
        y: number;
        opacity: number;
        transition: {
            type: any;
            delay: any;
            duration: any;
            ease: string;
        };
    };
};
export declare const zoomIn: (delay: any, duration: any) => {
    hidden: {
        scale: number;
        opacity: number;
    };
    show: {
        scale: number;
        opacity: number;
        transition: {
            type: string;
            delay: any;
            duration: any;
            ease: string;
        };
    };
};
export declare const slideIn: (direction: string, type: any, delay: any, duration: any) => {
    hidden: {
        x: string | number;
        y: string | number;
    };
    show: {
        x: number;
        y: number;
        transition: {
            type: any;
            delay: any;
            duration: any;
            ease: string;
        };
    };
};
export declare const staggerContainer: (staggerChildren?: any, delayChildren?: any) => {
    hidden: {};
    show: {
        transition: {
            staggerChildren: any;
            delayChildren: any;
        };
    };
};
