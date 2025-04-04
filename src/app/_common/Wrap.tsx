import styles from "./wrap.module.css";

export default function Wrap ({ children, title = '', checkRef = null }: { children: React.ReactNode, title?: string, checkRef?: HTMLInputElement | null }) {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles['terms-box']}>
          { children }
        </div>
        { checkRef &&
        <div className={styles['checkbox-group']}>
          <label>
            <input type="checkbox" className="agree" ref={checkRef}/>위 내용에 동의합니다.
          </label>
        </div> }
      </div>
    </>
  )
}
