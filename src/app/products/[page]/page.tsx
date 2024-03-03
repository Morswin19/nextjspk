import { type Route } from "next";
import { getProducts } from "@/api/products";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function Products(params: { params: { page: string } }) {
	const products = await getProducts(params["params"]["page"]);

	return (
		<main className="mx-auto my-10">
			<ProductsList products={products} />
			<nav className="mt-8 flex justify-center" aria-label="pagination">
				<ul className="flex h-10 items-center gap-4 -space-x-px text-base">
					<li>
						<ActiveLink href={"/products/1" as Route}>1</ActiveLink>
					</li>
					<li>
						<ActiveLink href={"/products/2" as Route}>2</ActiveLink>
					</li>
					<li>
						<ActiveLink href={"/products/3" as Route}>3</ActiveLink>
					</li>
					<li>
						<ActiveLink href={"/products/4" as Route}>4</ActiveLink>
					</li>
					<li>
						<ActiveLink href={"/products/5" as Route}>5</ActiveLink>
					</li>
					<li>
						<ActiveLink href={"/products/6" as Route}>6</ActiveLink>
					</li>
				</ul>
			</nav>
		</main>
	);
}
