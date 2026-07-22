export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { PrivacyComponent } from '@gitroom/frontend/components/public/privacy.component';

const title = 'Privacy Policy | PlanetPost';
const description = 'How PlanetPost collects, uses, and protects your data.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title,
    description,
    url: '/privacy',
    siteName: 'PlanetPost',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
};

export default function Page() {
  return <PrivacyComponent />;
}
