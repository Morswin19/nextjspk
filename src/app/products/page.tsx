import { getProducts } from "@/api/controllers/products";
import { type GetProductsResponse, type Products } from "@/types/productTypes";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { Pagination } from "@/ui/organisms/Pagination";
import { CategoriesList } from "@/ui/organisms/CategoriesList";

export default async function Products({
	searchParams,
}: {
	searchParams: { page: string | undefined; perPage: string | undefined };
}) {
	const page = searchParams.page ? parseInt(searchParams.page) : 1;
	const perPage = searchParams.perPage ? parseInt(searchParams.perPage) : 5;
	const products = (await getProducts({ page, perPage })) as GetProductsResponse;
	const { prev, next, pages } = products;

	return (
		<>
			<main className="mx-auto">
				<CategoriesList />
				<Pagination searchParams={searchParams} next={next} prev={prev} pages={pages} />
				<ProductsList products={products} />
			</main>
		</>
	);
}
