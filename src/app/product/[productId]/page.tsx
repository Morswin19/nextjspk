import Image from "next/image";
import { Suspense } from "react";
import { getProductById, getProducts } from "@/api/controllers/products";
import { type Products, type ProductType } from "@/types/productTypes";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { TestServerComponent } from "@/ui/atoms/TestServerComponent";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { Loader } from "@/ui/molecules/Loader";

export const generateStaticParams = async () => {
	const products = (await getProducts()) as Products;

	return products
		.map((product) => ({
			productId: product.id,
		}))
		.slice(0, 5);
};

export default async function Product({ params }: { params: { productId: string } }) {
	const product = (await getProductById(params.productId)) as ProductType;
	const { id, image, price, name, short_desc, long_desc, category } = product || {};
	return (
		<>
			<main>
				<div className="m-auto flex max-w-screen-xl flex-wrap justify-center gap-8 gap-y-10 py-10">
					<Image
						src={`https://images.pexels.com/photos/133${image}/pexels-photo-133${image}.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load`}
						alt={"test"}
						width={500}
						height={300}
						className="aspect-[5/3] object-cover"
					/>
					<div>
						<p>{name}</p>
						<p>{price}</p>
						<ProductCounter>
							<TestServerComponent />
						</ProductCounter>
						<p>{short_desc}</p>
					</div>
				</div>
				<p className="m-auto flex max-w-screen-md flex-wrap justify-center gap-8 gap-y-10 py-10">
					{long_desc}
				</p>
				<ProductsList products={[product]} />
				<Suspense fallback={<Loader />}>
					<SuggestedProducts category={category} id={id} />
				</Suspense>
			</main>
		</>
	);
}
