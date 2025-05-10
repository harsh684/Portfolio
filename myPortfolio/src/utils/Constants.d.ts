export declare const navLinks: {
    id: string;
    title: string;
}[];
declare const services: {
    title: string;
    icon: string;
}[];
declare const technologies: {
    name: string;
    icon: string;
}[];
declare const experiences: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
}[];
declare const testimonials: {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
}[];
declare const projects: ({
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image: string;
    source_code_link: string;
} | {
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image?: undefined;
    source_code_link?: undefined;
})[];
export { services, technologies, experiences, testimonials, projects };
