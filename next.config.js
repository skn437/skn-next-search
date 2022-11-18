/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"YOUR_EXTERNAL_IMAGE_DOMAIN_HERE_1",
			"YOUR_EXTERNAL_IMAGE_DOMAIN_HERE_SO_ON",
		],
	},
};
