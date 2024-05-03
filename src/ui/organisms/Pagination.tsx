import { clsx } from "clsx";
import Link from "next/link";
import { type PaginationProps } from "@/types/productTypes";

export async function Pagination({ slug, searchParams, next, prev, pages }: PaginationProps) {
	const pageParam = searchParams.page ? parseInt(searchParams.page) : 1;
	// const products = (await getProducts({ page, perPage })) as GetProductsResponse;

	const pagesArray = [...Array(pages).keys()];
	return (
		<ul className="flex flex-wrap justify-center gap-8 gap-y-10 py-10">
			<li>
				{prev && <Link href={`/products${slug && `/${slug}`}?page=${prev}&perPage=5`}>PREV</Link>}
			</li>
			{pagesArray.map((page) => (
				<li
					className={clsx(`text-blue-600 hover:text-blue-800`, {
						underline:
							(searchParams.page === undefined && page === 0) || page + 1 === Number(pageParam),
					})}
					key={page}
				>
					<Link href={`/products${slug && `/${slug}`}?page=${page + 1}&perPage=5`}>{page + 1}</Link>
				</li>
			))}
			<li>
				{next && <Link href={`/products${slug && `/${slug}`}?page=${next}&perPage=5`}>NEXT</Link>}
			</li>
		</ul>
	);
}
