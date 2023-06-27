import { useSelector } from 'react-redux';
import { TicketCard } from '..';
import { AppState, SearchState, useGetMoviesByCinemaIdQuery } from '../../store';
import styles from './Tickets.module.scss';

export const Tickets = () => {
  const { genre, title, cinema } = useSelector(({ search }: AppState): SearchState => search);
  const cinemaId = cinema.value;

  const { data, isSuccess, isError } = useGetMoviesByCinemaIdQuery({ cinemaId: cinemaId !== 'null' ? cinemaId : '' });

  const filtredData = (data || []).filter((ticket) => {
    if (!title && (genre.value === 'null' || !genre)) return !title && (genre.value === 'null' || !genre);
    if (title && (genre.value === 'null' || !genre)) return ticket.title.toLocaleLowerCase().includes(title.toLocaleLowerCase());
    if (!title && genre.value !== 'null' && genre) return ticket.genre === genre.value;
    return ticket.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) && ticket.genre === genre.value;
  });

  return (
    <div className={styles.tickets}>
      {filtredData.map((item) => (
        <TicketCard key={item.id} {...item} />
      ))}
      {isSuccess && !filtredData.length && <h3 className={styles.empty}>Совпвдений нет. Измените параметры фильтрации.</h3>}
      {isError && <h3 className={styles.empty}>Ошибка запроса...</h3>}
    </div>
  );
};
