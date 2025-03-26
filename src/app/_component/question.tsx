import styles from './question.module.css';

export default function Question ({question}: {question: string}) {
  return (
    <div>
      {question}
      <div className={styles.question}>
        <span>네</span><span>아니오</span>
      </div>
    </div>
  )
}