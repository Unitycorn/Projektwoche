/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  style-src 'self';
  font-src 'self';  
`;
const nextConfig = {
  reactStrictMode: false,
  images: {
    // Bildgrößen, hier ist es überlegenswert, den größten Wert
    // aus der Standard Konfiguration (3840) zu verkleinern.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    formats: ['image/avif', 'image/webp'],
    domains: ['react.webworker.berlin'],
  },
  // Erlaubt die neue Image-Komponente. Künftig prüfen, ob diese noch
  // "experimentell" oder Standard ist! https://nextjs.org/docs/api-reference/next/future/image
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          /*           {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          }, */
        ],
      },
    ];
  },
};

module.exports = nextConfig;
