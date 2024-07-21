export interface SocialMedia {
    email?: string;
    phone?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    playStore?: string;
    instagram?: string;
}

export interface WorkExperience {
    company: string;
    location: string;
    duration: string;
    position: string;
    description: string;
}

export interface Education {
    institution: string;
    duration: string;
    degree: string;
}

export interface Project {
    name: string;
    description: string;
    projectsUrl: string;
}

export interface Data {
    name: string;
    title?: string;
    location?: string;
    locationUrl?: string;
    about?: string;
    workExperience: WorkExperience[];
    education: Education[];
    skills: string[];
    projects: Project[];
    socialMedia?: SocialMedia;
}
