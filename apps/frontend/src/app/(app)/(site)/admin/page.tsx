export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { AdminComponent } from '@gitroom/frontend/components/admin/admin.component';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'PlanetPost' : 'Gitroom'} Admin`,
  description: '',
};
export default async function Index() {
  return <AdminComponent />;
}
