export type ShapeKind = 'circle' | 'square' | 'triangle' | 'half';
export type ShapeColor = 'red' | 'blue' | 'yellow' | 'ink' | 'paper';

export const studio = {
	name: 'vorkurs',
	tagline: 'Design, reduced to what works.',
	city: 'Dessau',
	founded: 2019
};

export const nav = [
	{ label: 'Services', href: '/services' },
	{ label: 'Pricing', href: '/pricing' },
	{ label: 'About', href: '/about' },
	{ label: 'Contact', href: '/contact' }
];

export const contact = {
	email: 'hello@vorkurs.studio',
	phone: '+49 340 555 0192',
	address: ['Gropiusallee 38', '06846 Dessau', 'Germany'],
	hours: 'Mon–Fri, 9:00–18:00 CET',
	socials: [
		{ label: 'Instagram', handle: '@vorkurs', href: 'https://instagram.com' },
		{ label: 'Are.na', handle: 'vorkurs', href: 'https://are.na' },
		{ label: 'LinkedIn', handle: 'vorkurs-studio', href: 'https://linkedin.com' }
	]
};

export const clients = [
	'Dessau Motors',
	'Weimar Press',
	'Albers Textiles',
	'Moholy Optics',
	'Breuer Seating',
	'Kandinsky & Co.'
];

export interface Service {
	n: string;
	slug: string;
	title: string;
	shape: ShapeKind;
	color: ShapeColor;
	summary: string;
	body: string;
	deliverables: string[];
}

export const services: Service[] = [
	{
		n: '01',
		slug: 'identity',
		title: 'Identity',
		shape: 'square',
		color: 'red',
		summary: 'Wordmarks, systems, and the rules that keep them honest.',
		body: 'We start with the smallest possible mark and earn every addition. The result is an identity that survives a favicon, a billboard, and an intern with a PowerPoint.',
		deliverables: ['Wordmark and symbol', 'Colour and type system', 'Grid and layout rules', 'Brand book and templates']
	},
	{
		n: '02',
		slug: 'product',
		title: 'Product',
		shape: 'circle',
		color: 'blue',
		summary: 'Interfaces for software people use all day, every day.',
		body: 'Screens are read, not admired. We design flows that reduce steps, components that stay consistent under load, and a system your engineers can extend without asking.',
		deliverables: ['Research and flows', 'Design system in code', 'Prototypes and testing', 'Handoff and QA']
	},
	{
		n: '03',
		slug: 'spatial',
		title: 'Spatial',
		shape: 'triangle',
		color: 'yellow',
		summary: 'Wayfinding, exhibitions, and signage that reads at a distance.',
		body: 'A sign is an interface with a ten-metre viewport. We design environmental graphics that work in bad light, at speed, and for people who did not come to look at them.',
		deliverables: ['Signage and wayfinding', 'Exhibition graphics', 'Retail and workplace', 'Fabrication drawings']
	},
	{
		n: '04',
		slug: 'type',
		title: 'Type',
		shape: 'half',
		color: 'ink',
		summary: 'Custom typefaces and lettering, from a single glyph to a family.',
		body: 'Owning your letters is the cheapest way to own your voice. We draw geometric, stencil, and grotesk faces built for the sizes and surfaces you actually use.',
		deliverables: ['Custom typeface', 'Logotype lettering', 'Variable font engineering', 'Licensing and specimens']
	}
];

export const process = [
	{ n: '01', title: 'Research', text: 'Interviews, audits, and constraints. We learn what the work has to do before we decide how it looks.' },
	{ n: '02', title: 'Reduce', text: 'Three directions become one. Every element has to justify its place or it goes.' },
	{ n: '03', title: 'Build', text: 'We design in the material: code, print proofs, or full-scale mock-ups. No slide-only concepts.' },
	{ n: '04', title: 'Ship', text: 'Documented, handed over, and supported. We stay on until it is live and holding.' }
];

export const stats = [
	{ value: '120', suffix: '+', label: 'Projects shipped' },
	{ value: '7', suffix: '', label: 'Years in practice' },
	{ value: '3', suffix: '', label: 'Studios · Dessau, Berlin, Zürich' }
];

export interface Work {
	title: string;
	client: string;
	kind: string;
	ground: ShapeColor;
	shape: ShapeKind;
	shapeColor: ShapeColor;
}

export const work: Work[] = [
	{ title: 'Dessau Motors', client: 'Identity, 2025', kind: 'Identity', ground: 'blue', shape: 'circle', shapeColor: 'paper' },
	{ title: 'Weimar Press', client: 'Product, 2025', kind: 'Product', ground: 'yellow', shape: 'triangle', shapeColor: 'ink' },
	{ title: 'Albers Textiles', client: 'Spatial, 2024', kind: 'Spatial', ground: 'ink', shape: 'square', shapeColor: 'red' }
];

export const testimonial = {
	quote: 'They took a brand with eleven colours and forty fonts and gave us back three of each. Sales went up. Nobody misses the rest.',
	name: 'Lotte Beck',
	role: 'CMO, Dessau Motors'
};

export interface Plan {
	name: string;
	price: string;
	period: string;
	blurb: string;
	features: string[];
	cta: string;
	href: string;
	highlighted?: boolean;
	shape: ShapeKind;
	color: ShapeColor;
}

export const plans: Plan[] = [
	{
		name: 'Sprint',
		price: '€12k',
		period: 'fixed, two weeks',
		blurb: 'One problem, one team, ten working days. Best for a launch, a rename, or a stuck redesign.',
		features: ['Two designers, one lead', 'Daily working sessions', 'Final files and source', 'Two weeks of support'],
		cta: 'Book a sprint',
		href: '/contact',
		shape: 'triangle',
		color: 'yellow'
	},
	{
		name: 'Studio',
		price: '€9k',
		period: 'per month, rolling',
		blurb: 'An embedded design team on a monthly retainer. Cancel with thirty days notice.',
		features: ['Dedicated lead and designer', 'Unlimited requests, one at a time', 'Weekly review', 'Design system upkeep', 'Priority turnaround'],
		cta: 'Start a retainer',
		href: '/contact',
		highlighted: true,
		shape: 'circle',
		color: 'blue'
	},
	{
		name: 'Partner',
		price: 'Custom',
		period: 'scoped per programme',
		blurb: 'Multi-year identity, product, and spatial programmes for organisations with many surfaces.',
		features: ['Full studio team', 'Brand and product governance', 'Custom type and tooling', 'On-site days', 'Quarterly audits'],
		cta: 'Talk to us',
		href: '/contact',
		shape: 'square',
		color: 'red'
	}
];

export const faqs = [
	{
		q: 'What happens after I book a sprint?',
		a: 'We send a short brief to fill in, then hold a two-hour kickoff. Day one starts the following Monday.'
	},
	{
		q: 'Do you work with early-stage companies?',
		a: 'Yes. Most sprints are with teams under twenty people. Retainers tend to start once there is a product in market.'
	},
	{
		q: 'Who owns the work?',
		a: 'You do, on final payment. That includes source files, fonts we drew for you, and the design system code.'
	},
	{
		q: 'Can we pause a retainer?',
		a: 'Once per year for up to two months, at no cost. Longer pauses restart the queue.'
	},
	{
		q: 'Do you do development?',
		a: 'We build design systems and front-end components in code. Full application development we do with partner studios we have worked with for years.'
	}
];

export const principles = [
	{ shape: 'triangle' as ShapeKind, color: 'yellow' as ShapeColor, title: 'Form follows function', text: 'If an element does not carry information or direct attention, it is removed.' },
	{ shape: 'circle' as ShapeKind, color: 'blue' as ShapeColor, title: 'Design in the material', text: 'We work in code, print proofs, and full-scale mock-ups, never only in slides.' },
	{ shape: 'square' as ShapeKind, color: 'red' as ShapeColor, title: 'Systems over pieces', text: 'One good rule beats fifty good pages. We ship the rule and the pages come free.' }
];

export const team = [
	{ name: 'Ilse Brandt', role: 'Founder, creative director', shape: 'circle' as ShapeKind, color: 'blue' as ShapeColor },
	{ name: 'Tomas Okafor', role: 'Design director, product', shape: 'square' as ShapeKind, color: 'red' as ShapeColor },
	{ name: 'Mara Lindqvist', role: 'Type designer', shape: 'triangle' as ShapeKind, color: 'yellow' as ShapeColor },
	{ name: 'Jonas Weil', role: 'Spatial lead', shape: 'half' as ShapeKind, color: 'ink' as ShapeColor }
];

export const timeline = [
	{ year: '2019', text: 'Founded in a former weaving workshop in Dessau by two designers and one type drawer.' },
	{ year: '2021', text: 'First custom typeface shipped. Berlin studio opens for product work.' },
	{ year: '2023', text: 'Spatial practice added after the Albers Textiles wayfinding programme.' },
	{ year: '2025', text: 'Zürich studio opens. Team of fourteen across three cities.' }
];
