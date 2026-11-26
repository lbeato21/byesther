export type LinkVariant =
	| 'pill-web'
	| 'pill-insta-crafts'
	| 'pill-insta-shop'
	| 'pill-whatsapp';

export interface LinkItem {
	href: string;
	iconClass: string;
	text: string;
	variant: LinkVariant;
	showArrow?: boolean;
}

export interface SiteConfig {
	brandName: string;
	subtitle: string;
	pageTitle: string;
	description: string;
	instagramGroupTitle: string;
	footerCredit: {
		symbol: string;
		label: string;
	};
}

export const siteConfig: SiteConfig = {
	brandName: 'Esther Crafts',
	subtitle: 'Artesanía Digital • Accesorios',
	pageTitle: 'Esther Crafts - Portal Social Oficial',
	description:
		'Portal social oficial de Esther Crafts. Accede a nuestro sitio web, redes sociales en Instagram y WhatsApp directo.',
	instagramGroupTitle: 'Nuestras Marcas en Instagram',
	footerCredit: {
		symbol: '</>',
		label: 'by MYTEC',
	},
};

export const primaryLink: LinkItem = {
	href: 'https://esthercrafts.com',
	iconClass: 'fas fa-satellite-dish',
	text: 'Explorar Sitio Web',
	variant: 'pill-web',
	showArrow: true,
};

export const instagramLinks: LinkItem[] = [
	{
		href: 'https://instagram.com/esther_crafts',
		iconClass: 'fas fa-palette',
		text: 'Esther Crafts',
		variant: 'pill-insta-crafts',
	},
	{
		href: 'https://instagram.com/esthershopbyec',
		iconClass: 'fas fa-shopping-cart',
		text: 'Esther Shop',
		variant: 'pill-insta-shop',
	},
];

export const whatsappLink: LinkItem = {
	href: 'https://wa.me/18492010608?text=Hola%20Esther%20%E2%9C%A8%20vengo%20desde%20tu%20portal%20QR',
	iconClass: 'fab fa-whatsapp',
	text: 'Chat Directo WhatsApp',
	variant: 'pill-whatsapp',
};
