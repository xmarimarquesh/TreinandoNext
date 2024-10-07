/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{protocol: "https", hostname: "via.placeholder.com"}]
        
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
