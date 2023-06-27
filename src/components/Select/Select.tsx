import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import arrowIcon from '../../assets/arrow.svg';
import styles from './Select.module.scss';
import { AppState, SearchState, searchSlice, store, Option } from '../../store';

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

  const [isOpen, setIsOpen] = useState(false);

  const toogleSelect = () => {
    setIsOpen((prev) => !prev);
  };

  const setValue = (item: Option) => {
    if (name === 'genre') store.dispatch(searchSlice.actions.setGenre(item));
    else if (name === 'cinema') store.dispatch(searchSlice.actions.setCinema(item));
    toogleSelect();
  };

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <div className={[styles.select, isOpen ? styles.open : ''].join(' ')}>
        <div className={styles.select__input}>
          {selectedValue.value !== 'null' ? (
            <span className={styles.select__content}>{selectedValue.label}</span>
          ) : (
            <span className={styles.select__placeholder}>{placeholder}</span>
          )}
          <button type="button" className={styles.select__arrow} onClick={toogleSelect}>
            <svg className={styles.select__svg}>
              <use href={`${arrowIcon}#arrow`} />
            </svg>
          </button>
        </div>
        {isOpen && (
          <>
            <button type="button" onClick={toogleSelect} className={styles.select__backdrop}>
              close
            </button>
            <div className={styles.select__dropdown}>
              <div className={styles.select__list}>
                {[defaultOption, ...items].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    className={styles.select__item}
                    onClick={() => setValue(item)}
                    disabled={selectedValue.value === item.value}
                  >
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
