import { type Product } from "@/types/Product";
import { ProductItem } from "@/ui/molecules/ProductItem";

export function ProductsList({ products }: { products: Product[] }) {
	return (
		<section>
			<ul data-testid="products-list" className="flex flex-wrap gap-8">
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</ul>
		</section>
	);
}
