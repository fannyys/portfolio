export type SiteLink = {
	href: string;
	label: string;
};

export type SiteConfig = {
	name: string;
	title: string;
	description: string;
	siteUrl: string;
	email: string;
	locale: string;
	authorName: string;
	authorRole: string;
	keywords: string[];
	ogImage: string;
	navLinks: SiteLink[];
	extraPages: SiteLink[];
	legalLinks: SiteLink[];
	socialLinks: SiteLink[];
};

const defaultSiteUrl = 'https://fannyys.github.io/portfolio/';
const envSiteUrl = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL;
const normalizedSiteUrl = (envSiteUrl || defaultSiteUrl).replace(/\/+$/, '');

export const siteConfig: SiteConfig = {
	name: 'Fanny',
	title: 'Fanny - UX/UI Designer Portfolio',
	description:
		'A clean Astro theme for UI/UX designer portfolios, case studies, and modern product design presentations.',
	// Set SITE_URL or PUBLIC_SITE_URL to keep canonicals, robots.txt, and the sitemap aligned in each environment.
	siteUrl: normalizedSiteUrl,
	email: 'f.liideenn@gmail.com',
	locale: 'sv-SE',
	authorName: 'Fanny',
	authorRole: 'UX/UI Designer',
	keywords: [
		// 'Astro UI UX portfolio theme',
		// 'UI UX designer portfolio template',
		// 'Astro portfolio template',
		// 'product designer portfolio theme',
		// 'case study portfolio theme',
	],
	ogImage: '/og-image.svg',
	navLinks: [
		{ href: '/work', label: 'Projekt' },
		{ href: '/about', label: 'Om mig' },
		{ href: '/resume', label: 'CV' },
	],
	extraPages: [
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
		{ href: '/404', label: '404' },
	],
	legalLinks: [
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
	],
	socialLinks: [
		{ href: 'https://www.linkedin.com/in/fannylidenolsson/', label: 'LinkedIn' },
		// { href: 'https://dribbble.com/', label: 'Dribbble' },
	],
};
