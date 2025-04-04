import styles from "./wrap.module.css";

type props = {
  title: string,
  content: React.ReactNode,
  useAgree: boolean,
  setAgree?: Function;
};

export default function _Wrap ({title, content, useAgree, setAgree}: props) {
  const onClick = e => { // ============ 이벤트 타입 알아보기!!!!!!
    if(setAgree)
    setAgree(e.target.checked);
  }
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles['terms-box']}>
          {content}
        </div>
        {useAgree && setAgree &&
        <div className={styles['checkbox-group']}>
          <label>
            <input type="checkbox" className="agree" onClick={onClick}/>위 내용에 동의합니다.
          </label>
        </div>}
      </div>
    </>
  );
}