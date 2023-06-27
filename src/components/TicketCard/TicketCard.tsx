import { FC } from 'react';
import { Genre, MovieDto } from '../../store/types';
import styles from './TicketCard.module.scss';

export const TicketCard: FC<MovieDto> = ({ posterUrl, title, genre }) => {
  return (
    <div className={styles.ticket}>
      <img className={styles.poster} src={posterUrl} alt={title} />
      <div>
        <h4>{title}</h4>
        <i>{Genre[genre]}</i>
      </div>
      <div className={styles.controls}>Контролы</div>
    </div>
  );
};
