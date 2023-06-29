import { QUESTIONS } from '../../common/constants/qustions';
import { Question } from '../../components';
import styles from './Questions.module.scss';

export const Questions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Вопросы-ответы</h2>
      <div className={styles.questions}>
        {QUESTIONS.map((question) => (
          <Question key={question.answer} {...question} />
        ))}
      </div>
    </div>
  );
};
