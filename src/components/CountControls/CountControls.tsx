import { FC, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCartCount } from '../../common/hooks';
import { MovieDto } from '../../store/types';
import { store, cartSlice } from '../../store';
import { Modal } from '..';
import plusIcon from '../../assets/plus.svg';
import minusIcon from '../../assets/minus.svg';
import closeIcon from '../../assets/close.svg';
import styles from './CountControls.module.scss';

interface CountControlsProps {
  data: MovieDto;
}

export const CountControls: FC<CountControlsProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isDeletable = useLocation().pathname === '/cart';
  const count = useCartCount(data.id);

  const addTicket: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    store.dispatch(cartSlice.actions.setTicketInfo({ ...data, tickets: count + 1 }));
  };

  const reduceTicket: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (count === 1) {
      if (isDeletable) {
        setIsModalOpen(true);
        return;
      }
      store.dispatch(cartSlice.actions.removeTicketsbyId(data.id));
      return;
    }
    store.dispatch(cartSlice.actions.setTicketInfo({ ...data, tickets: count - 1 }));
  };

  const removeTickets = () => {
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

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
      {isModalOpen && <Modal id={data.id} closeModal={closeModal} />}
    </div>
  );
};
