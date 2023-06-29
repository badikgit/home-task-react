import { FC } from 'react';
import styles from './Loader.module.scss';

export const Loader: FC = () => {
  return (
    <span className={styles.wrapper}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </span>
  );
};
