import { useSelector } from 'react-redux';
import { AppState, CartState } from '../../store';

export const useCartCount = () => {
  const cartState = useSelector(({ cart }: AppState): CartState => cart);
  let count = 0;
  Object.values(cartState).forEach((ticketInfo) => {
    count += ticketInfo.tickets || 0;
  });
  return count;
};
