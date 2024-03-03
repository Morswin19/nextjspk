import { type ProductResponseItem } from "@/types/Product";

export const getProducts = async (page?: string) => {
	const pageNumber: number = page ? Number(page) * 20 - 20 : 0;
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=20&offset=${pageNumber}`,
	);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map((product) => ({
		id: product.id,
		name: product.title,
		price: product.price,
		category: product.category,
		coverAlt: product.title,
		coverSrc: product.image,
	}));
	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;
	const product = {
		id: productResponse.id,
		name: productResponse.title,
		price: productResponse.price,
		category: productResponse.category,
		coverAlt: productResponse.title,
		coverSrc: productResponse.image,
		description: productResponse.description,
		longDescription: productResponse.longDescription,
	};
	return product;
};
