import icons from '../../assets/icons';
import styles from './modal.module.css';

export function Modal ({ children, isOpen, closeModal }) {
  const handleClickModalContainer = (e) => e.stopPropagation();

  return (
    <article className={isOpen ? `${styles.modal} ${styles.is__open}` : styles.modal} onClick={closeModal}>
      <div className={styles.modal__div__container} onClick={handleClickModalContainer}>
        <button className={styles.modal__button__close} onClick={closeModal}>
          <img src={icons.modal_close} alt="Close modal" />
        </button>
        {children}
      </div>
    </article>
  );
}
