import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function Navigation() {
	return (
		<ul className="flex">
			<li className="border-2 px-4">
				<ActiveLink linkName="Produkty" href="/products" />
			</li>
			<li className="border-2 px-4">
				<ActiveLink linkName="Blog" href="/blog" />
			</li>
			<li className="border-2 px-4">
				<ActiveLink linkName="Kategorie" href="/categories" />
			</li>
			<li className="border-2 px-4">
				<ActiveLink linkName="Kontakt" href="/contact" />
			</li>
		</ul>
	);
}
