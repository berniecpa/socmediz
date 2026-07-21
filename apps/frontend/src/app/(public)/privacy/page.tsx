export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { PrivacyComponent } from '@gitroom/frontend/components/public/privacy.component';

export const metadata: Metadata = {
  title: 'Privacy Policy | PlanetPost',
  description: 'How PlanetPost collects, uses, and protects your data.',
};

export default function Page() {
  return <PrivacyComponent />;
}
