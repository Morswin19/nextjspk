import { type ReactNode } from "react";

export default function DocumentsLayout({ children }: { children: ReactNode }) {
	return <div className="bg-blue-400">{children}</div>;
}
