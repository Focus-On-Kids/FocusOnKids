import { Layout } from '../components/layout/Layout';
import { Title } from '../components/title/Title';
import { useForm } from '../hooks/useForm';
import CTASocialMedia from '../components/cta/CTASocialMedia';
import icons from '../assets/icons';
import styles from './contacto.module.css';

const SUBJECT_OPTIONS = [
  {
    value: 'Evaluaciones'
  },
  {
    value: 'Tratamientos Intensivos'
  },
  {
    value: 'Supervisiones'
  },
  {
    value: 'Formaciones'
  },
  {
    value: 'Coaching a Padres'
  },
  {
    value: 'Otros'
  }
];

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  select: '',
  message: ''
};

function Contacto() {
  const {
    form,
    isSelectActive,
    handleIsSelectActive,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleSelect
  } = useForm(INITIAL_FORM);

  return (
    <Layout>
      {
        response
          ? (
            <section className={styles.contact__section__thanks}>
              <h2>MUCHAS GRACIAS!</h2>
              <p>
                Su comentario se ha enviado correctamente.
                En breve nos pondremos en contacto con Ud/s.
              </p>
              <img src={icons.timer} alt="Timer" />
              <p>
                Pronto será redirigido a la pagina de Inicio.
              </p>
            </section>
          )
          : (
            <>
              <Title>CONTACTO</Title>
              <section className={styles.contact__section__container}>
                <p>
                  En este momento, póngase en contacto con Belén para obtener información sobre la programación de un servicio.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className={errors.name ? `${styles.input__error} ${styles.contact__form__input}` : styles.contact__form__input}>
                    <input type="text" name="name" value={form.name} onBlur={handleBlur} onChange={handleChange} required />
                    <span>Nombre Completo</span>
                  </div>
                  {errors.name && <p className={styles.error}>{errors.name}</p>}
                  <div className={errors.phone ? `${styles.input__error} ${styles.contact__form__input}` : styles.contact__form__input}>
                    <input type="tel" name="phone" value={form.phone} onBlur={handleBlur} onChange={handleChange} required />
                    <span>Teléfono/Celular</span>
                  </div>
                  {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                  <div className={errors.email ? `${styles.input__error} ${styles.contact__form__input}` : styles.contact__form__input}>
                    <input type="email" name="email" value={form.email} onBlur={handleBlur} onChange={handleChange} required />
                    <span>E-mail</span>
                  </div>
                  {errors.email && <p className={styles.error}>{errors.email}</p>}
                  <div className={styles.contact__form__input} onClick={() => handleIsSelectActive(true)}>
                    <img src={icons.chevron} alt="select input arrow" className={isSelectActive ? styles.rotate : ''} />
                    <input type="text" name="select" value={form.select} onChange={() => {}} required />
                    <span>Seleccionar Asunto</span>
                    <div className={isSelectActive ? styles.contact__form__select : styles.contact__form__select__hidden}>
                      <ul>
                        {
                          SUBJECT_OPTIONS.map((option) => (
                            <div
                              onClick={() => handleSelect(option.value)}
                              key={option.value}
                            >
                              {option.value}
                            </div>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                  <div
                    className={errors.message ? `${styles.input__error} ${styles.contact__form__textarea}` : styles.contact__form__textarea}
                  >
                    <textarea name="message" rows="10" value={form.message} onBlur={handleBlur} onChange={handleChange} required />
                    <span>Mensaje</span>
                  </div>
                  {errors.message && <p className={styles.error}>{errors.message}</p>}
                  <div className={styles.contact__form__button}>
                    <button type="submit" disabled={loading}>Enviar</button>
                  </div>
                </form>
              </section>
            </>
          )
      }
      
    </Layout>
  );
}

export default CTASocialMedia(Contacto);
