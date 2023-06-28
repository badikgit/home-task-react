import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDebounce } from '../../common/hooks';
import arrowIcon from '../../assets/arrow.svg';
import { AppState, SearchState, searchSlice, store, Option } from '../../store';
import styles from './Select.module.scss';

interface SelectProps {
  label?: string;
  placeholder?: string;
  items?: Option[];
  name: string;
}

export const Select: FC<SelectProps> = ({ label = 'LabeL', placeholder = 'Placeholder', items = [], name }) => {
  const searchState = useSelector(({ search }: AppState): SearchState => search);

  const defaultOption: Option = { label: 'Не выбран', value: 'null' };
  const selectedValue = name === 'genre' ? searchState.genre : name === 'cinema' ? searchState.cinema : defaultOption;

  const [query, setQuery] = useState(selectedValue);
  const debounced = useDebounce(query);
  const [isOpen, setIsOpen] = useState(false);

  const toogleSelect = () => {
    setIsOpen((prev) => !prev);
  };

  const setValue = (item: Option) => {
    setQuery(item);
    toogleSelect();
  };

  useEffect(() => {
    if (typeof debounced !== 'string') {
      if (name === 'genre') store.dispatch(searchSlice.actions.setGenre(debounced));
      else if (name === 'cinema') store.dispatch(searchSlice.actions.setCinema(debounced));
    }
  }, [debounced, name]);

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <div className={[styles.select, isOpen ? styles.open : ''].join(' ')}>
        <button type="button" className={styles.select__input} onClick={toogleSelect}>
          {query.value !== 'null' ? (
            <span className={styles.select__content}>{query.label}</span>
          ) : (
            <span className={styles.select__placeholder}>{placeholder}</span>
          )}
          <svg className={styles.select__svg}>
            <use href={`${arrowIcon}#arrow`} />
          </svg>
        </button>
        {isOpen && (
          <>
            <button type="button" onClick={toogleSelect} className={styles.select__backdrop}>
              close
            </button>
            <div className={styles.select__dropdown}>
              <div className={styles.select__list}>
                {[defaultOption, ...items].map((item) => (
                  <button key={item.value} type="button" className={styles.select__item} onClick={() => setValue(item)} disabled={query.value === item.value}>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
