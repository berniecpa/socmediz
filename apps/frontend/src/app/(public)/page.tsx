export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { LandingComponent } from '@gitroom/frontend/components/public/landing.component';

export const metadata: Metadata = {
  title: 'PlanetPost — Schedule your entire social presence from one place',
  description:
    'Plan, write with AI, and publish to 28+ social and chat channels from one calendar. Analytics, team collaboration, and automation included. Start your free trial.',
};

export default function Page() {
  return <LandingComponent />;
}
