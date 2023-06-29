import { createPortal } from 'react-dom';
import closeIcon from '../../assets/close.svg';
import styles from './Modal.module.scss';
import { cartSlice, store } from '../../store';

export const Modal = ({ id, closeModal }: { id: string; closeModal: () => void }) => {
  const confirmHandler = () => {
    store.dispatch(cartSlice.actions.removeTicketsbyId(id));
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return createPortal(
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles.modal} onClick={stopPropagation}>
        <div className={styles.heading}>
          <h4>Удаление билета</h4>
          <button type="button" onClick={closeModal}>
            <svg>
              <use href={`${closeIcon}#close`} />
            </svg>
          </button>
        </div>
        <p>Вы уверены, что хотите удалить билет?</p>
        <div className={styles.controls}>
          <button type="button" onClick={confirmHandler}>
            Да
          </button>
          <button type="button" onClick={closeModal}>
            Нет
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
