import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { TestServerComponent } from "@/ui/atoms/TestServerComponent";

export default function Home() {
	return (
		<>
			<main className="mx-auto">
				<h2>HERO</h2>
				<h2>POLECANE</h2>
				<h2>KATEGORIE</h2>
				<ProductCounter>
					<TestServerComponent />
				</ProductCounter>
			</main>
		</>
	);
}
