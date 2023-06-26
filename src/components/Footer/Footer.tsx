import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.link} to="/questions">
        Вопросы-ответы
      </Link>
      <Link className={styles.link} to="/about">
        О нас
      </Link>
    </footer>
  );
}
