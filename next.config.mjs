/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                port: '',
                pathname:'/**',

            },
            {
                protocol: 'https',
                hostname: 'images.fravega.com',
                port: '',
                pathname:'/**',

            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                port: '',
                pathname:'/**',

            },
            {
                protocol: 'https',
                hostname: 'www.oscarbarbieri.com',
                port: '',
                pathname:'/**',

            }
        ]
    }
};

export default nextConfig;
