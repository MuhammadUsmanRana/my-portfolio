export interface Skill {
    name: string;
    level: number;
    icon: string;
    category: 'frontend' | 'backend';
    color: string;
    description: string;
}

export type ThemeType = 'light' | 'dark';

export interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    fullWidth?: boolean;
    children: React.ReactNode;
}


export interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    featured?: boolean;
}

export interface ExperienceData {
    company: string;
    role: string;
    duration: string;
    location: string;
    description: string[];
    technologies: string[];
    logo: string;
}

