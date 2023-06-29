import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDebounce } from '../../common/hooks';
import { AppState, SearchState, searchSlice, store } from '../../store';
import styles from './Input.module.scss';

interface InputProps {
  label?: string;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({ label = 'LabeL', placeholder = 'Placeholder' }) => {
  const { title: value } = useSelector(({ search }: AppState): SearchState => search);
  const [query, setQuery] = useState(value);

  const debounced = useDebounce(query);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  useEffect(() => {
    if (typeof debounced === 'string') {
      store.dispatch(searchSlice.actions.setTitle(debounced));
    }
  }, [debounced]);

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} value={query} onChange={onChangeHandler} />
    </div>
  );
};
