import { type GetProductsProps, type Products, type ProductType } from "@/types/productTypes";

// get all products
export const getProducts = async ({ page, perPage }: GetProductsProps) => {
	const res = await fetch(`http://localhost:8000/api?_page=${page}&_per_page=${perPage}`);
	return res.json();
};

export const getCategories = async () => {
	const res = await fetch("http://localhost:8000/api");
	const products = (await res.json()) as Products;
	const categories = products.map((product: ProductType) => product.category);
	const categoriesSet = new Set(categories);
	return categoriesSet;
};

export const getProductsByCategory = async ({ category, page, perPage }: GetProductsProps) => {
	const res = await fetch(
		`http://localhost:8000/api?category=${category}&_page=${page}&_per_page=${perPage}`,
	);
	return res.json();
};

// get one product
export const getProductById = async (productId: ProductType["id"]) => {
	const res = await fetch(`http://localhost:8000/api/${productId}`);
	if (res.status === 200) {
		return res.json();
	}
	return undefined;
};
