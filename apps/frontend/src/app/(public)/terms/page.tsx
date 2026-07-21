export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { TermsComponent } from '@gitroom/frontend/components/public/terms.component';

export const metadata: Metadata = {
  title: 'Terms of Service | PlanetPost',
  description: 'The terms that govern your use of PlanetPost.',
};

export default function Page() {
  return <TermsComponent />;
}
