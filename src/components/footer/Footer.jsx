import icons from '../../assets/icons';
import styles from './footer.module.css';

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
        <article className={styles.footer__article__contact}>
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
        </article>
        <article>
          <span>
            COPYRIGTH FOCUSONKIDS - {currentYear}. TODOS LOS DERECHOS RESERVADOS
          </span>
        </article>
        <article>
          <span>
            Realizado por Quarzo &copy;
          </span>
        </article>
      </section>
    </footer>
  );
}
