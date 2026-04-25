// Nav model — keeping link/icon data in one spot so Nav.astro stays clean.
export type NavItem = {
  id: string;
  label: string;
  href: string;
  desc: string;
  keywords: string;
  icon: string; // raw SVG markup
};

export const navItems: NavItem[] = [
  {
    id: 'about',
    label: 'About',
    href: '/about',
    desc: '/about',
    keywords: 'about me bio',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a7 7 0 0 1 16 0v1"/></svg>`,
  },
  {
    id: 'music',
    label: 'Music',
    href: 'https://soundcloud.com/raenborn',
    desc: '/music',
    keywords: 'music soundcloud',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  },
  {
    id: 'socials',
    label: 'Socials',
    href: '/#socials',
    desc: '/elsewhere',
    keywords: 'socials github linkedin twitter x',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  },
  {
    id: 'magicpill',
    label: 'MagicPill Labs',
    href: 'https://magicpilllabs.com',
    desc: '/mpl',
    keywords: 'magicpill labs mpl',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 7v10l8 5 8-5V7l-8-5Z"/><path d="m4 7 8 5 8-5"/><path d="M12 12v10"/></svg>`,
  },
  {
    id: 'hexero',
    label: 'Hexero',
    href: '/projects',
    desc: '/hexero · app',
    keywords: 'hexero app',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/></svg>`,
  },
  {
    id: 'games',
    label: 'Games made with AI',
    href: 'https://harmonichemispheres.github.io/AI-Built-Games/',
    desc: '/play',
    keywords: 'games ai play',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"/></svg>`,
  },
  {
    id: 'blog',
    label: 'Medium · Writing',
    href: '/blog',
    desc: '/words',
    keywords: 'medium blog writing',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="14 3 14 9 20 9"/></svg>`,
  },
];
