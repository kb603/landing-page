/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/:path*',
            destination: 'https://shadcn-101.vercel.app/:path*',
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
