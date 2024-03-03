import Image from "next/image";
import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProducts } from "@/api/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { priceFormat } from "@/utils/priceFormat";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name}`,
		description: `${product.description}`,
	};
};

export const generateStaticParams = async () => {
	const products = await getProducts();
	return products
		.map((product) => ({
			productId: product.id,
		}))
		.slice(0, 2);
};

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	return (
		<main className="mx-auto my-10 max-w-screen-xl justify-center p-4">
			<section>
				<div className="flex justify-center gap-10">
					<Image
						className="w-100 h-150 object-cover"
						width={400}
						height={600}
						src={product.coverSrc}
						alt={product.coverAlt}
					/>
					<div className="max-w-xs">
						<h1 className="mb-4 text-3xl">{product.name}</h1>
						<p className="mb-16">{product.description}</p>
						<p className="mb-4">Price: {priceFormat(product.price)}</p>
						<button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
							Add to cart
						</button>
					</div>
				</div>
				<p>{product.longDescription}</p>
			</section>
			<section className="mt-8">
				<h2 className="mb-4 text-2xl">Proponowane produkty</h2>
				<Suspense>
					<SuggestedProducts />
				</Suspense>
			</section>
		</main>
	);
}
