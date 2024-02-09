import { type Product } from "@/types/Product";
import { ProductCover } from "@/ui/atoms/ProductCover";
import { ProductInfo } from "@/ui/atoms/ProductInfo";

export function ProductItem({ product }: { product: Product }) {
	return (
		<li className="rounded bg-slate-300">
			<ProductCover alt={product.coverAlt} src={product.coverSrc} />
			<ProductInfo
				name={product.name}
				price={product.price}
				category={product.category}
			/>
		</li>
	);
}
