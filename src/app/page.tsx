import { type Product } from "@/types/Product";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default function Home() {
	const products: Product[] = [
		{
			id: 1,
			name: "Car",
			price: 1410,
			category: "cars",
			coverAlt: "car",
			coverSrc: "/image_car.jpg",
		},
		{
			id: 2,
			name: "Bottle",
			price: 801,
			category: "bottles",
			coverAlt: "bottle",
			coverSrc: "/image_bottle.jpg",
		},
		{
			id: 3,
			name: "Shoe",
			price: 117,
			category: "shoes",
			coverAlt: "shoe",
			coverSrc: "/image_shoe.jpg",
		},
		{
			id: 4,
			name: "Stool",
			price: 2112,
			category: "stools",
			coverAlt: "stool",
			coverSrc: "/image_stool.jpg",
		},
	];

	return (
		<main className="mx-auto my-10 flex h-screen justify-center">
			<ProductsList products={products} />
		</main>
	);
}
