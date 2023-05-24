import { Button } from '../button/Button';
import otherImages from '../../assets/img/index.js';
import styles from './ctacontact.module.css';
import { Link } from 'react-router-dom';

const COLLAB_LOGOS = [
  {
    src: otherImages.collab1,
    alt: 'Connecting Kids',
    to: 'https://connectingkidsot.com',
  },
  {
    src: otherImages.collab2,
    alt: 'Centro Integral Huellas',
    to: '/',
  },
  {
    src: otherImages.collab2,
    alt: 'Centro Integral Huellas double',
    to: '/',
  },
];

export function CTAContact({ withCollabLogos = false, alwaysActive = false }) {
  return (
    <>
      {withCollabLogos ? (
        <aside className={`${styles.cta__aside__collab} ${styles.no__active}`}>
          {COLLAB_LOGOS.map((logo) => (
            <Link to={logo.to} key={logo.alt} target="_blank">
              <img src={logo.src} alt={logo.alt} />
            </Link>
          ))}
        </aside>
      ) : (
        <article
          className={
            alwaysActive
              ? styles.cta__article__contact
              : `${styles.cta__article__contact} ${styles.no__active}`
          }
        >
          <h3>Para más información podés</h3>
          <Button href="/">Contactarnos</Button>
        </article>
      )}
    </>
  );
}
