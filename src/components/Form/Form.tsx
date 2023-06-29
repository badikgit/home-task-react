import { Input, Select } from '..';
import { useGetCinemasQuery } from '../../store';
import { Genre } from '../../store/types';
import styles from './Form.module.scss';

export const Form = () => {
  const genresItems = Object.keys(Genre).map((value) => ({ value, label: Genre[value] }));
  const { data } = useGetCinemasQuery(null);

  const cinemasItems = !data ? [] : data.map((cinema) => ({ value: cinema.id, label: cinema.name }));

  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        <h3>Фильтер поиска</h3>
        <div className={styles.controls}>
          <Input placeholder="Введите название" label="Название" />
          <Select placeholder="Выберите жанр" label="Жанр" items={genresItems} name="genre" />
          <Select placeholder="Выберите кинотеатр" label="Кинотеатр" items={cinemasItems} name="cinema" />
        </div>
      </div>
    </form>
  );
};
