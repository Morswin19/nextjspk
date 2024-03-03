import { priceFormat } from "@/utils/priceFormat";

type ProductInfoProps = {
	name: string;
	price: number;
	category: string;
};

export function ProductInfo({ name, price, category }: ProductInfoProps) {
	return (
		<div className="p-4">
			<div>
				<h1 className="text-base font-bold">{name}</h1>
				<p>{priceFormat(price / 100)}</p>
			</div>
			<p>category: {category}</p>
		</div>
	);
}
