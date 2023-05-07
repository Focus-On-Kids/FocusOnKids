import { Carrusel } from '../components/carrusel/Carrusel';
import { Layout } from '../components/layout/Layout';
import { Novedades } from '../components/novedades/Novedades';

export default function Home() {
  return (
    <Layout>
      <Carrusel />
      <Novedades />
    </Layout>
  );
}
