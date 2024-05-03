import Link from "next/link";
import { getCategories } from "@/api/controllers/products";

export async function CategoriesList() {
	const categories = Array.from(await getCategories());

	return (
		<section>
			<ul className="m-auto flex max-w-screen-xl flex-wrap justify-center gap-8 gap-y-10 py-10">
				{categories.map((category) => (
					<Link key={category} href={`/products/${category}`}>
						<li>
							<span className="font-large inline-flex items-center rounded-md bg-purple-50 px-4 py-2 text-xl text-purple-700 ring-1 ring-inset ring-purple-700/10 hover:bg-purple-200">
								{category}
							</span>
						</li>
					</Link>
				))}
			</ul>
		</section>
	);
}
