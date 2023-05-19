import { useModal } from '../hooks/useModal';
import { Layout } from '../components/layout/Layout';
import { CTAContact } from '../components/cta/CTAContact';
import { Picture } from '../components/picture/Picture';
import { Title } from '../components/title/Title';
import { Video } from '../components/video/Video';
import { Modal } from '../components/modal/Modal';
import styles from './belen.module.css';

export default function Belen() {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <Layout>
      <Title>Sobre Belen</Title>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <Video />
      </Modal>
      <article className={styles.role__article}>
        <div onClick={openModal}>
          <Picture src="/src/assets/novedades/novedad1.svg" alt="Belen Cortese" isModal />
        </div>
        <div className={styles.role__div__content}>
          <h3>Lic. Belén Cortese</h3>
          <h3>Directora - Terapista Ocupacional</h3>
          <hr className={styles.division} />
        </div>
      </article>
      <hr className={styles.division} />
      <section className={styles.about__section__content}>
        <p>Estoy especializada en pediatría. Trabajando con niños y sus familias desde hace más de 15 años.</p>
        <p>Realicé especialización de Integración Sensorial en Bs. As. y USA, me formé en el modelo DIR/floortime en Europa, donde tuve el inmenso placer de trabajar junto a Amy Zier en sus clínicas, brindando atención a familias de la OTAN y realizando supervisiones a estudiantes de TO de diferentes universidades de EEUU que optaban por hacer sus prcticas finales con nosotros en Italia.
        </p>
        <p>Lo que más disfruto de mi profesión es el trabajo continuo con las familias para el logro de objetivos, acompañarlos en el proceso hasta el alta y los desafíos que se me presentan en el trabajo con estudiantes y las nuevas generaciones... de quienes continúo aprendiendo a diario.</p>
      </section>
      <Video />
      <CTAContact alwaysActive />
    </Layout>
  );
}
