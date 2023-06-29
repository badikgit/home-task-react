import { Link } from 'react-router-dom';
import ticketIcon from '../../assets/ticket.svg';
import cartIcon from '../../assets/basket.svg';
import styles from './Header.module.scss';
import { CartCounter } from '..';

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <h1 className={styles.logo}>
          <img src={ticketIcon} alt="cart" />
          Билетопоиск
        </h1>
      </Link>
      <Link className={[styles.cart, styles.link].join(' ')} to="/cart">
        <CartCounter />
        <img src={cartIcon} alt="cart" />
      </Link>
    </header>
  );
}
