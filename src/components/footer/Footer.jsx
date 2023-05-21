import { Link } from 'react-router-dom';

import icons from '../../assets/icons';
import logos from '../../assets/logo';
import styles from './footer.module.css';

const EXPLORE_ITEMS = [
  {
    title: 'Acerca de',
    to: '/acerca'
  },
  {
    title: 'Sobre Belén',
    to: '/belen'
  },
  {
    title: 'Servicios',
    to: '/'
  },
  {
    title: 'Novedades',
    to: '/'
  },
  {
    title: 'Contacto',
    to: '/'
  }
];

const SERVICES = [
  {
    title: 'Formación',
    to: '/'
  },
  {
    title: 'Coaching a Padres',
    to: '/'
  },
  {
    title: 'Tratamientos Intensivos',
    to: '/'
  },
  {
    title: 'Evaluaciones',
    to: '/'
  },
  {
    title: 'Supervisiones',
    to: '/'
  }
];

const CONTACT_DATA = [
  {
    href: 'https://www.facebook.com/focusonkids.bc',
    src: icons.facebook
  },
  {
    href: 'https://www.instagram.com/focus.on.kids',
    src: icons.instagram
  },
  {
    href: 'https://www.linkedin.com/company/focusonkids',
    src: icons.linkedin
  },
  {
    href: 'mailto:focusonkids.to@gmail.com',
    src: icons.email
  }
];

const COLLAB_DATA = [
  {
    title: 'Connecting Kids',
    to: '/'
  },
  {
    title: 'Kairós',
    to: '/'
  },
  {
    title: 'Huellas',
    to: '/'
  },
  {
    title: 'InterAttivaMente',
    to: '/'
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__section__container}>
        <section className={styles.footer__section__contact}>
          <article className={styles.footer__article__none}>
            <figure className={styles.footer__figure__logo}>
              <img src={logos.white_logo} alt="Focus On Kids logo" />
            </figure>
          </article>
          <article className={styles.footer__article__none}>
            <h4>EXPLORA</h4>
            {
              EXPLORE_ITEMS.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                >
                  {item.title}
                </Link>
              ))
            }
          </article>
          <article className={styles.footer__article__none}>
            <h4>SERVICIOS</h4>
            {
              SERVICES.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                >
                  {item.title}
                </Link>
              ))
            }
          </article>
          <article className={styles.footer__article__none}>
            <div>
              <h4>MEDIOS DE PAGO</h4>
              <img src={icons.card} alt="card icon" />
              <img src={icons.paypal} alt="paypal icon" />
              <img src={icons.cash} alt="cash icon" />
            </div>
          </article>
          <article className={styles.footer__article__visible}>
            <h4>REDES SOCIALES</h4>
            <div>
              {
                CONTACT_DATA.map((contact) => (
                  <a
                    key={contact.src}
                    href={contact.href}
                    target="_blank" rel="noopener noreferrer"
                  >
                    <img src={contact.src} alt="contact logo" />
                  </a>
                ))
              }
            </div>
            <aside>
              <h4>COLABORACIÓN</h4>
              {
                COLLAB_DATA.map((collab) => (
                  <Link
                    key={collab.title}
                    to={collab.to}
                  >
                    {collab.title}
                  </Link>
                ))
              }
            </aside>
          </article>
        </section>
      </section>
      <section className={styles.footer__section__rights}>
        <p>COPYRIGTH FOCUSONKIDS - {currentYear}. TODOS LOS DERECHOS RESERVADOS</p>
        <p>Realizado por Quarzo &copy;</p>
      </section>
    </footer>
  );
}
