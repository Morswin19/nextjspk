import { ProductsList } from "./ProductsList";
import { getProducts } from "@/api/products";

export const SuggestedProducts = async () => {
	const products = await getProducts();
	return <ProductsList products={products.slice(-4)} />;
};
