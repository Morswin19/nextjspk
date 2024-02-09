import { priceFormat } from "@/utils/priceFormat";

type ProductInfoProps = {
	name: string;
	price: number;
	category: string;
};

export function ProductInfo({ name, price, category }: ProductInfoProps) {
	return (
		<div className="p-4">
			<p>
				<p>{name}</p>
				<p>{priceFormat(price / 100)}</p>
			</p>
			<p>category: {category}</p>
		</div>
	);
}
