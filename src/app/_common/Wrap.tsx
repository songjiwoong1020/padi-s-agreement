import styles from "./wrap.module.css";

// export default function Wrap (Component: React.ReactNode) {
export default function Wrap ({ children, checkbox = false }: { children: React.ReactNode, checkbox: boolean }) {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>temp</div>
        {/* <div className={styles.title}>{title}</div> */}
        <div className={styles['terms-box']}>
          {/* <Component /> */}
          { children }
        </div>
        { checkbox &&
        <div className={styles['checkbox-group']}>
          <label>
            <input type="checkbox" className="agree" />위 내용에 동의합니다.
          </label>
        </div> }
        {/* {useAgree && setAgree &&
        <div className={styles['checkbox-group']}>
          <label>
            <input type="checkbox" className="agree" onClick={onClick}/>위 내용에 동의합니다.
          </label>
        </div>} */}
      </div>
    </>
  )
}
