import { useLocation } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../store';
import { Loader, MovieCard } from '../../components';
import styles from './Movie.module.scss';

export const Movie = () => {
  const location = useLocation();
  const movieId = location.pathname.split('/').reverse()[0];
  const { data, isLoading, isSuccess } = useGetMovieByIdQuery({ movieId }, { refetchOnMountOrArgChange: true });

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      {isSuccess && <MovieCard {...data} />}
    </div>
  );
};
