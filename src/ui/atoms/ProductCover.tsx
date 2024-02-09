import Image from "next/image";

type ProductCoverProps = {
	alt: string;
	src: string;
};

export function ProductCover({ alt, src }: ProductCoverProps) {
	return (
		<div className="grid h-72 w-72 place-items-center overflow-hidden rounded-md">
			<Image
				className="h-64 w-64 cursor-pointer object-cover transition hover:rotate-1 hover:scale-125"
				width={240}
				height={240}
				src={src}
				alt={alt}
			/>
		</div>
	);
}
