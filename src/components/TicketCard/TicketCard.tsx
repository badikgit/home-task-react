import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Genre, MovieDto } from '../../store/types';
import { CountControls } from '..';
import styles from './TicketCard.module.scss';
import { ROUTES } from '../../common/constants/routes';

export const TicketCard: FC<MovieDto> = (props) => {
  const { id, genre, posterUrl, title } = props;
  const navigate = useNavigate();

  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.target instanceof HTMLButtonElement) {
      const movieId = e.target.value;
      navigate(ROUTES.MOVIE.replace(':id', movieId));
    }
  };

  return (
    <button type="button" className={styles.ticket} value={id} onClick={onClickHandler}>
      <img className={styles.poster} src={posterUrl} alt={title} loading="lazy" />
      <div>
        <h4>{title}</h4>
        <i>{Genre[genre]}</i>
      </div>
      <CountControls data={props} />
    </button>
  );
};
