export type Product = {
	id: string;
	name: string;
	price: number;
	category: string;
	coverAlt: string;
	coverSrc: string;
};

export type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

export interface Rating {
	rate: number;
	count: number;
}
