import { useState } from 'react';

import { Link } from 'react-router-dom';

import icons from '../../assets/icons';
import styles from './ctasocialmedia.module.css';

const SOCIAL_MEDIA = [
  {
    iconName: 'instagram',
    to: 'https://www.instagram.com/focus.on.kids',
    icon: icons.instagram
  },
  {
    iconName: 'email',
    to: 'mailto:focusonkids.to@gmail.com',
    icon: icons.email
  },
  {
    iconName: 'linkedin',
    to: 'https://www.linkedin.com/company/focusonkids',
    icon: icons.linkedin
  },
];

export default function CTASocialMedia (Component) {
  return function HOC() {
    const [isCTAActive, setIsCTAActive] = useState(false);
  
    const handleCallToAction = () => {
      setIsCTAActive(!isCTAActive);
    };

    return (
      <div className={styles.cta__div__container}>
        <div className={styles.cta__div__flex}>
          <div className={styles.cta}>
            <div
              className={isCTAActive ? `${styles.cta__div__icon} ${styles.cta__active}` : styles.cta__div__icon}
              onClick={handleCallToAction}
            >
              <img src={icons.cta} alt="Call to action menu" />
            </div>
            <div className={isCTAActive ? `${styles.cta__div__social} ${styles.cta__div__social__active}` : styles.cta__div__social}>
              {
                SOCIAL_MEDIA.map((social) => (
                  <Link
                    key={social.iconName}
                    to={social.to}
                    className={styles[`${social.iconName}`]}
                  >
                    <img src={social.icon} alt={social.iconName} />
                  </Link>
                ))
              }
            </div>
          </div>
          <Component />
        </div>
      </div>
    );
  };
}
