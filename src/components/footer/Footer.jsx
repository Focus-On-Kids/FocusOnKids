import icons from '../../assets/icons';
import styles from './footer.module.css';

const EXPLORE_ITEMS = [
  {
    title: 'Acerca de',
    to: '#'
  },
  {
    title: 'Sobre Belén',
    to: '#'
  },
  {
    title: 'Servicios',
    to: '#'
  },
  {
    title: 'Novedades',
    to: '#'
  },
  {
    title: 'Contacto',
    to: '#'
  }
];

const SERVICES = [
  {
    title: 'Charlas abierta a la comunidad',
    to: '#'
  },
  {
    title: 'Sesiones de colaboración',
    to: '#'
  },
  {
    title: 'Tratamientos Intensivos',
    to: '#'
  },
  {
    title: 'Grupos de Estudio',
    to: '#'
  },
  {
    title: 'Evaluaciones',
    to: '#'
  },
  {
    title: 'Supervisiones',
    to: '#'
  }
];

const CONTACT_DATA = [
  {
    href: 'https://www.facebook.com/focusonkids.bc',
    src: icons.facebook
  },
  {
    href: 'https://www.instagram.com/focus.on.kids/',
    src: icons.instagram
  },
  {
    href: 'https://www.linkedin.com/company/focusonkids/',
    src: icons.linkedin
  },
  {
    href: 'mailto:focusonkids.to@gmail.com',
    src: icons.email
  },
  {
    href: 'tel:+5492974924433',
    src: icons.whatsapp
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__section__container}>
        <section className={styles.footer__section__contact}>
          <article className={styles.footer__article__none}>
            <h4>EXPLORA</h4>
            {
              EXPLORE_ITEMS.map((item) => (
                <a
                  key={item.title}
                  href={item.to}
                >
                  {item.title}
                </a>
              ))
            }
          </article>
          <article className={styles.footer__article__none}>
            <h4>SERVICIOS</h4>
            {
              SERVICES.map((item) => (
                <a
                  key={item.title}
                  href={item.to}
                >
                  {item.title}
                </a>
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
            <div>
              <h4>COLABORACIÓN</h4>
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
                    <img src={contact.src} alt="" />
                  </a>
                ))
              }
            </div>
            <article className={styles.footer__article__none}>
              <h4>CONTACT0</h4>
              <a href="mailto:focusonkids.to@gmail.com">
                <img src={icons.email} alt="email icon" />
                focusonkids.bc@gmail.com
              </a>
              <a href="tel:+5492974924433">
                <img src={icons.whatsapp} alt="whatsapp icon" />
                +54 9 297 4924433
              </a>
            </article>
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
