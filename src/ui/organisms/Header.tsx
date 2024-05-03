import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/ui/molecules/Navigation";

export function Header() {
	return (
		<header className="bg-white p-5">
			<div className="m-auto flex max-w-screen-xl items-center justify-between">
				<Link href="/">
					<Image src="https://rockserwis.fm/static/rsfm.png" alt="" width={80} height={80} />
				</Link>
				<Navigation />
			</div>
		</header>
	);
}
