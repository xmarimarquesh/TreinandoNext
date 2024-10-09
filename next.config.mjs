/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "via.placeholder.com" },
            { protocol: "https", hostname: "static.wikia.nocookie.net" }
        ],
    },
    

    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/",
            },
            {
                source: "/second",
                destination: "/segunda-aba",
            },
        ]
    }
};

export default nextConfig;
