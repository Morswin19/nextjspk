import { getProductsByCategory } from "@/api/controllers/products";
import { type GetProductsResponse } from "@/types/productTypes";
import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function Category({
	params,
	searchParams,
}: {
	params: { category: string };
	searchParams: { page: string | undefined; perPage: string | undefined };
}) {
	const page = searchParams.page ? parseInt(searchParams.page) : 1;
	const perPage = searchParams.perPage ? parseInt(searchParams.perPage) : 5;

	const products = (await getProductsByCategory({
		category: params.category,
		page,
		perPage,
	})) as GetProductsResponse;
	const { prev, next, pages } = products;

	return (
		<>
			<main className="mx-auto">
				<CategoriesList />
				<Pagination
					slug={params.category}
					searchParams={searchParams}
					next={next}
					prev={prev}
					pages={pages}
				/>
				<ProductsList products={products} />
			</main>
		</>
	);
}
