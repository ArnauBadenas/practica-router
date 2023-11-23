export interface Destination {
    name: string;
    slug: string;
    image: string;
    id: number;
    description: string;
    experiences: Experience[];
}

export interface Experience {
    name: string;
    slug: string;
    image: string;
    description: string;
}