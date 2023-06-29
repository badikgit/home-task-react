import { useSelector } from 'react-redux';
import { TicketCard } from '../../components';
import { AppState, CartState } from '../../store';
import { useCartCount } from '../../common/hooks';
import styles from './Cart.module.scss';

export const Cart = () => {
  const cartState = useSelector(({ cart }: AppState): CartState => cart);
  const count = useCartCount();

  return (
    <div className={styles.container}>
      {Object.values(cartState).map((ticket) => (
        <TicketCard key={ticket.id} {...ticket} />
      ))}
      {!count && <div className={styles.heading}>Корзина пуста</div>}
      {!!count && (
        <div className={styles.total}>
          <span>Итого билетов:</span>
          <b>{count}</b>
        </div>
      )}
    </div>
  );
};
