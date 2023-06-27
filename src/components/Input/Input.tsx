import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState, SearchState, searchSlice, store } from '../../store';
import styles from './Input.module.scss';

interface InputProps {
  label?: string;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({ label = 'LabeL', placeholder = 'Placeholder' }) => {
  const { title: value } = useSelector(({ search }: AppState): SearchState => search);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    store.dispatch(searchSlice.actions.setTitle(newValue));
  };

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} value={value} onChange={onInput} />
    </div>
  );
};
