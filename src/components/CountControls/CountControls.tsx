import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieDto } from '../../store/types';
import { useCartCount } from '../../common/hooks';
import { store, cartSlice } from '../../store';
import plusIcon from '../../assets/plus.svg';
import minusIcon from '../../assets/minus.svg';
import closeIcon from '../../assets/close.svg';
import styles from './CountControls.module.scss';

interface CountControlsProps {
  data: MovieDto;
}

export const CountControls: FC<CountControlsProps> = ({ data }) => {
  const isDeletable = useLocation().pathname === '/cart';
  const count = useCartCount(data.id);

  const addTicket: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    store.dispatch(cartSlice.actions.setTicketInfo({ ...data, tickets: count + 1 }));
  };

  const reduceTicket: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    store.dispatch(cartSlice.actions.setTicketInfo({ ...data, tickets: count - 1 }));
  };

  const removeTickets: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    store.dispatch(cartSlice.actions.removeTicketsbyId(data.id));
  };

  return (
    <div className={styles.controls}>
      <button type="button" disabled={!count} onClick={reduceTicket} className={styles.control}>
        <picture>
          <svg>
            <use href={`${minusIcon}#minus`} />
          </svg>
        </picture>
      </button>
      <b>{count}</b>
      <button type="button" disabled={count === 30} onClick={addTicket} className={styles.control}>
        <picture>
          <svg>
            <use href={`${plusIcon}#plus`} />
          </svg>
        </picture>
      </button>
      {isDeletable && (
        <button type="button" disabled={!count} onClick={removeTickets} className={styles.remove}>
          <picture>
            <svg>
              <use href={`${closeIcon}#close`} />
            </svg>
          </picture>
        </button>
      )}
    </div>
  );
};
