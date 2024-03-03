"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import type { Route } from "next";

export const ActiveLink = ({
	href,
	children,
}: {
	href: Route | URL;
	children: React.ReactNode;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(
				`text-grey-darkest hover:text-blue-dark ml-2 text-lg no-underline`,
				{
					"border-b-2": isActive,
				},
			)}
		>
			{children}
		</Link>
	);
};
