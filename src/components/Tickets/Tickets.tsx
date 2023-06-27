import { useSelector } from 'react-redux';
import { TicketCard } from '..';
import { AppState, SearchState, useGetMoviesByCinemaIdQuery } from '../../store';
import styles from './Tickets.module.scss';

export const Tickets = () => {
  const { genre, title } = useSelector(({ search }: AppState): SearchState => search);
  const cinemaId = '';

  const { data, isSuccess, isError } = useGetMoviesByCinemaIdQuery({ cinemaId });

  const filtredData = (data || []).filter((ticket) => {
    if (!title && !genre) return !title && !genre;
    if (title && !genre) return ticket.title.toLocaleLowerCase().includes(title.toLocaleLowerCase());
    if (!title && genre) return ticket.genre === genre;
    return ticket.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) && ticket.genre === genre;
  });

  return (
    <div className={styles.tickets}>
      {filtredData.map((item) => (
        <TicketCard key={item.id} {...item} />
      ))}
      {isSuccess && !filtredData.length && <h3 className={styles.empty}>Не удалось ничего найти...</h3>}
      {isError && <h3 className={styles.empty}>Ошибка запроса...</h3>}
    </div>
  );
};
