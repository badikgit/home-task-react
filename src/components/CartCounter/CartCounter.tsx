import { useCartCount } from '../../common/hooks';
import styles from './CartCounter.module.scss';

export const CartCounter = () => {
  const count = useCartCount();

  if (!count) return null;

  return <span className={styles.counter}>{count}</span>;
};
