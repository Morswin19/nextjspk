import { type Route } from "next";
import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function Navigation() {
	return (
		<nav className="flex w-full flex-col justify-end bg-white px-6 py-4 text-center font-sans shadow sm:flex-row sm:items-baseline sm:justify-end sm:text-left">
			<ul className="flex gap-x-12">
				<ActiveLink href={"/" as Route}>Home</ActiveLink>
				<ActiveLink href={"/products" as Route}>All</ActiveLink>
				<ActiveLink href={"/aboutus" as Route}>AboutUs</ActiveLink>
				<ActiveLink href={"/contact" as Route}>Contact</ActiveLink>
				<ActiveLink href={"/cart" as Route}>
					<ShoppingCart />
				</ActiveLink>
			</ul>
		</nav>
	);
}
