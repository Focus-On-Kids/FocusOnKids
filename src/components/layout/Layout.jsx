import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import style from './layout.module.css';

export function Layout ({ children }) {
  return (
    <div className={style.layout__div__container}>
      <Header />
      <main className={style.layout__main}>
        {children}
      </main>
      <Footer/>
    </div>
  );
}
