"use client";

import { type ReactNode, useState } from "react";
// import { TestServerComponent } from "@/ui/atoms/TestServerComponent";

export function ProductCounter({ children }: { children: ReactNode }) {
	const [count, setCount] = useState(0);

	return (
		<div className="flex items-center justify-center ">
			<button className="h-8 w-8 border-2 border-black" onClick={() => setCount(count - 1)}>
				-
			</button>
			<p className="w-16 text-center">{count}</p>
			<button className="h-8 w-8 border-2 border-black" onClick={() => setCount(count + 1)}>
				+
			</button>
			{children}
		</div>
	);
}
