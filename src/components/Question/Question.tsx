import { FC, useState } from 'react';
import arrowIcon from '../../assets/arrow.svg';
import styles from './Question.module.scss';

interface QuestionProps {
  question: string;
  answer: string;
}

export const Question: FC<QuestionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => setIsOpen((prev) => !prev);

  return (
    <button type="button" className={[styles.question, isOpen ? styles.open : ''].join(' ')} onClick={onClickHandler}>
      <div className={styles.heading}>
        <h3>{question}</h3>
        <picture className={styles.arrow}>
          <svg>
            <use href={`${arrowIcon}#arrow`} />
          </svg>
        </picture>
      </div>
      {isOpen && <p className={styles.textContent}>{answer}</p>}
    </button>
  );
};
