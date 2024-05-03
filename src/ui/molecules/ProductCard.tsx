import Image from "next/image";
import Link from "next/link";
import { CategoryMark } from "@/ui/atoms/CategoryMark";
import { type ProductType } from "@/types/productTypes";
import { priceFormat } from "@/utils/priceFormat";

export function ProductCard({
	product: { id, image, name, price, category },
}: {
	product: ProductType;
}) {
	return (
		<li className="max-w-sm overflow-hidden rounded shadow-lg">
			<Link href={`/product/${id}`}>
				<article>
					<Image
						src={`https://images.pexels.com/photos/133${image}/pexels-photo-133${image}.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load`}
						alt={name}
						width={500}
						height={300}
						className="aspect-[5/3] object-cover"
					/>
					<div className="px-4 py-4">
						<div className="mb-2 text-xl font-bold">{name}</div>
					</div>
					<div className="grid px-4 pb-2 pt-4">
						<span className="text-center text-5xl">{priceFormat(price)}</span>
					</div>
					<div className="px-4 pb-2 pt-4">
						<CategoryMark category={category} />
					</div>
				</article>
			</Link>
		</li>
	);
}
