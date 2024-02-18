/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "100.66.76.99",
        port: "4000",
        pathname: "/api/get_image",
      },
    ],
  },
};

export default nextConfig;
