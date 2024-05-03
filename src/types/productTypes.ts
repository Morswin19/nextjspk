export type ProductType = {
	id: string;
	image: number;
	name: string;
	short_desc: string;
	long_desc: string;
	price: number;
	category: string;
};

export type GetProductsResponse = {
	first: number | null;
	prev: number | null;
	next: number | null;
	last: number | null;
	pages: number;
	items: number;
	data: ProductType[];
};

export type Products = ProductType[];

export type GetProductsProps = {
	page: number;
	perPage: number;
	category?: string;
};

export type PaginationProps = {
	slug?: string | null;
	next: number | null;
	prev: number | null;
	pages: number | null;
	searchParams: {
		page: string | undefined;
		perPage: string | undefined;
	};
};
