import { type GetProductsResponse } from "@/types/productTypes";
import { ProductCard } from "@/ui/molecules/ProductCard";

export async function ProductsList({ products }: { products: GetProductsResponse | undefined }) {
	return (
		<section>
			<ul className="m-auto flex max-w-screen-xl flex-wrap justify-center gap-8 gap-y-10 py-10">
				{products?.data.map((product, index) => <ProductCard key={index} product={product} />)}
			</ul>
		</section>
	);
}
