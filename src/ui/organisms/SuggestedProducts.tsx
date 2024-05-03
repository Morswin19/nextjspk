import { getProductsByCategory } from "@/api/controllers/products";
import { type Products } from "@/types/productTypes";
import { ProductsList } from "@/ui/organisms/ProductsList";

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function SuggestedProducts({ category, id }: { category: string; id: string }) {
	const categoryProducts = (await getProductsByCategory(category)) as Products;
	const suggestedProducts = categoryProducts.filter((product) => product.id !== id);
	await wait(2000);
	return (
		<section>
			<h2 className="m-auto flex max-w-screen-md flex-wrap justify-center pt-10 text-2xl">
				Sugerowane Produkty
			</h2>
			<ProductsList products={suggestedProducts} />;
		</section>
	);
}
