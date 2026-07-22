export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { LandingComponent } from '@gitroom/frontend/components/public/landing.component';

const title =
  'PlanetPost — Schedule your entire social presence from one place';
const description =
  'Plan, write with AI, and publish to 28+ social and chat channels from one calendar. Analytics, team collaboration, and automation included. Start your free trial.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'social media scheduler',
    'social media management',
    'schedule posts',
    'content calendar',
    'AI social media assistant',
    'social media analytics',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'PlanetPost',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PlanetPost — social media scheduling platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
};

export default async function Page() {
  return <LandingComponent />;
}
