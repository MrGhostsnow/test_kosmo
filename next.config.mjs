/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3-alpha-sig.figma.com"],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
