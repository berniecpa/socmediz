import { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';

export default function robots(): MetadataRoute.Robots {
  const base = process.env.FRONTEND_URL || 'http://localhost:4200';
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/terms', '/privacy'],
        disallow: [
          '/auth',
          '/launches',
          '/analytics',
          '/media',
          '/settings',
          '/billing',
          '/admin',
          '/plugs',
          '/agents',
          '/third-party',
          '/modal',
          '/oauth',
          '/integrations',
          '/api',
          '/uploads',
          '/p/',
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
