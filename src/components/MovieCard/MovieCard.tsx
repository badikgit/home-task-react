import { FC } from 'react';
import { CountControls, Loader, Reviews } from '..';
import { useGetReviewsByMovieIdQuery } from '../../store';
import { Genre, MovieDto } from '../../store/types';
import styles from './MovieCard.module.scss';

export const MovieCard: FC<MovieDto> = (props) => {
  const { posterUrl, title, genre, id: movieId, description, director, rating, releaseYear } = props;
  const { data, isLoading, isFetching, isSuccess } = useGetReviewsByMovieIdQuery({ movieId });

  return (
    <div className={styles.wrapper}>
      <div className={styles.movie}>
        <img className={styles.poster} src={posterUrl} alt={title} />
        <div className={styles.content}>
          <div className={styles.heading}>
            <h4>{title}</h4>
            <CountControls data={props} />
          </div>
          <div className={styles.info}>
            <p>
              <b>Жанр: </b>
              {Genre[genre]}
            </p>
            <p>
              <b>Год выпуска: </b>
              {releaseYear}
            </p>
            <p>
              <b>Рейтинг: </b>
              {rating}
            </p>
            <p>
              <b>Режиссер: </b>
              {director}
            </p>
            <p className={styles.discription}>
              <b>Описание: </b>
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
      {(isLoading || isFetching) && <Loader />}
      {isSuccess && <Reviews data={data} />}
    </div>
  );
};
