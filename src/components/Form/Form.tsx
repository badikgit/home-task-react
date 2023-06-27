import { useState } from 'react';
import { Input } from '..';
import styles from './Form.module.scss';

export const Form = () => {
  const [name, setName] = useState('');
  return (
    <form className={styles.form}>
      <h3>Фильтер поиска</h3>
      <div>
        <Input placeholder="Введите название" label="Название" value={name} inputCallback={setName} />
      </div>
    </form>
  );
};
