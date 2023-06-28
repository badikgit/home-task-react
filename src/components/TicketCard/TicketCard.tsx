import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Genre, MovieDto } from '../../store/types';
import styles from './TicketCard.module.scss';

export const TicketCard: FC<MovieDto> = ({ posterUrl, title, genre, id }) => {
  const navigate = useNavigate();

  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.target instanceof HTMLButtonElement) {
      const movieId = e.target.value;
      navigate(`movie/${movieId}`);
    }
  };

  return (
    <button type="button" className={styles.ticket} value={id} onClick={onClickHandler}>
      <img className={styles.poster} src={posterUrl} alt={title} loading="lazy" />
      <div>
        <h4>{title}</h4>
        <i>{Genre[genre]}</i>
      </div>
      <div className={styles.controls}>Контролы</div>
    </button>
  );
};
