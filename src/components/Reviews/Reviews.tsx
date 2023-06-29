import { FC } from 'react';
import { ReviewDto } from '../../store/types';
import photo from '../../assets/photo.svg';
import styles from './Reviews.module.scss';

interface ReviewsProps {
  data?: ReviewDto[];
}

export const Reviews: FC<ReviewsProps> = ({ data = [] }) => {
  return (
    <>
      {data.map((review) => (
        <div key={review.id} className={styles.review}>
          <picture className={styles.photo}>
            <svg>
              <use href={`${photo}#photo`} />
            </svg>
          </picture>
          <div className={styles.info}>
            <div className={styles.heading}>
              <h4>{review.name}</h4>
              <span>Оценка: <b>{review.rating}</b></span>
            </div>
            <p>{review.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};
