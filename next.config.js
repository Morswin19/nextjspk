/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx"],
	experimental: {
		typedRoutes: true,
	},
	images: {
		domains: [
			"naszsklep-api.vercel.app",
			"v1.tailwindcss.com",
			"images.pexels.com",
			"rockserwis.fm",
		],
	},
};

// const withMDX = require("@next/mdx")();
// module.exports = withMDX(nextConfig);
module.exports = nextConfig;
