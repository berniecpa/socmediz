export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { TermsComponent } from '@gitroom/frontend/components/public/terms.component';

const title = 'Terms of Service | PlanetPost';
const description = 'The terms that govern your use of PlanetPost.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title,
    description,
    url: '/terms',
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
  return <TermsComponent />;
}
