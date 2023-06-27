import { useLocation } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../store';
import { MovieCard } from '../../components';
// import styles from './Movie.module.scss';

export const Movie = () => {
  const location = useLocation();
  const movieId = location.pathname.split('/').reverse()[0];
  const { data } = useGetMovieByIdQuery({ movieId });

  if (!data) return null;

  return <MovieCard {...data} />;
};
