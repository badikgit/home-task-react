import { Form, Tickets } from '../../components';
import styles from './Search.module.scss';

export const Search = () => {
  return (
    <div className={styles.container}>
      <Form />
      <Tickets />
    </div>
  );
};
