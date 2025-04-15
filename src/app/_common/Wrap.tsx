import styles from "./wrap.module.css";

type props = {
  children: React.ReactNode,
  title?: string,
  checkRef?: React.Ref<HTMLInputElement> | null,
  handleChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default function Wrap ({ children, title = '', checkRef = null, handleChange }: props) {
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
            <input onChange={handleChange} type="checkbox" className="agree" ref={checkRef}/>위 내용에 동의합니다.
          </label>
        </div> }
      </div>
    </>
  )
}
