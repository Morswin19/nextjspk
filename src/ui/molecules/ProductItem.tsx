import Link from "next/link";
import { type Route } from "next";
import { type Product } from "@/types/Product";
import { ProductCover } from "@/ui/atoms/ProductCover";
import { ProductInfo } from "@/ui/atoms/ProductInfo";

export function ProductItem({ product }: { product: Product }) {
	return (
		<li className="rounded bg-slate-300">
			<Link href={`/product/${product.id}` as Route}>
				<ProductCover alt={product.coverAlt} src={product.coverSrc} />
				<ProductInfo
					name={product.name}
					price={product.price}
					category={product.category}
				/>
			</Link>
		</li>
	);
}
