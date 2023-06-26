import { Route, Routes } from 'react-router-dom';
import { About, Cart, Search, Questions } from '../../routes';
import { ROUTES } from '../../common/constants/routes';
import styles from './Main.module.scss';

export function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CART} element={<Cart />} />
        <Route path={ROUTES.QUESTIONS} element={<Questions />} />
      </Routes>
    </main>
  );
}
