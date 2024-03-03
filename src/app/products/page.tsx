import { getProducts } from "@/api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { ProductsPagination } from "@/ui/molecules/ProductPagination";

export default async function Products() {
	const products = await getProducts();
	return (
		<main className="mx-auto my-10">
			<ProductsList products={products} />
			<ProductsPagination />
		</main>
	);
}
