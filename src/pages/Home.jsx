import { Carrusel } from '../components/carrusel/Carrusel';
import { CTAContact } from '../components/cta/CTAContact';
import CTASocialMedia from '../components/cta/CTASocialMedia';
import { Layout } from '../components/layout/Layout';
import { Novedades } from '../components/novedades/Novedades';

function Home() {
  return (
    <Layout>
      <Carrusel />
      <Novedades />
      <CTAContact />
    </Layout>
  );
}

export default CTASocialMedia(Home);
