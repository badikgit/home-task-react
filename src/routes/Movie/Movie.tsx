import { useLocation } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../store';
import { Loader, MovieCard } from '../../components';
import styles from './Movie.module.scss';

export const Movie = () => {
  const location = useLocation();
  const movieId = location.pathname.split('/').reverse()[0];
  const { data, isLoading, isFetching, isSuccess } = useGetMovieByIdQuery({ movieId }, { refetchOnMountOrArgChange: true });

  return (
    <div className={styles.wrapper}>
      {(isLoading || isFetching) && <Loader />}
      {isSuccess && <MovieCard {...data} />}
    </div>
  );
};
