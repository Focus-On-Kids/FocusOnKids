import icons from '../../assets/icons';
import styles from './play.module.css';

export function Play() {
  return (
    <div className={styles.play}>
      <img src={icons.play_white} alt="Play button" />
    </div>
  );
}
