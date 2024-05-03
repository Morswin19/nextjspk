"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const ActiveLink = ({ href, linkName }: { href: string; linkName: string }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(`text-blue-600 hover:text-blue-800`, {
				underline: isActive,
			})}
		>
			{linkName}
		</Link>
	);
};

// export default function Link<RouteType>(props: LinkProps<RouteType>): JSX.Element
