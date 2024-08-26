/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    output: "export",  // <=== enables static exports

};

export default nextConfig;
