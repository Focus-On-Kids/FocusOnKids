import { Link } from 'react-router-dom';

import styles from './button.module.css';

export function Button ({ children, href }) {
  return (
    <Link to={href} className={styles.button}>{children}</Link>
  );
}
