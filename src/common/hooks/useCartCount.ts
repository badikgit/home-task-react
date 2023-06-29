import { useSelector } from 'react-redux';
import { AppState, CartState } from '../../store';

export const useCartCount = (id?: string) => {
  const cartState = useSelector(({ cart }: AppState): CartState => cart);
  let count = 0;
  if (!id) {
    Object.values(cartState).forEach((ticketInfo) => {
      count += ticketInfo.tickets || 0;
    });
  } else {
    count += cartState[id]?.tickets || 0;
  }
  return count;
};
