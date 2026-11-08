import avatar from '../assets/images/foto.PNG';
import hero from '../assets/images/logo.png';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://RAMVT02.github.io',
    avatar: {
        src: avatar,
        alt: 'Raul Villanueva'
    },
    title: 'Raul Alexander Marcial Villanueva Tello',
    subtitle: 'Egresado de la Facultad de Ciencias Fisicas en la UNMSM.',
    description: 'Me interesa la relacion de la programacion con la matematica y la fisica.',
    image: {
        src: '/preview.png',
        alt: 'Imagen de preview para compartir'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Hola, Bienvenido a mi portafolio profesional!',
        text: "Egresado de la carrera de Física en la UNMSM, con experiencia en el campo laboral de la metrología y proyectos de investigación. Sólida formación en programación, matemáticas avanzadas y física. Destaco por mi capacidad de adaptabilidad, pensamiento crítico, trabajo en equipo y resiliencia.",
        image: {
            src: hero,
            alt: 'Logo de mis iniciales'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
