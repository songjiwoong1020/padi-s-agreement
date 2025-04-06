import styles from "./button.module.css";

export default function Button({text, buttonRef}: { text: string, buttonRef: React.Ref<HTMLButtonElement> }) {
  return (
    <button className={styles.btn} disabled={true} ref={buttonRef} >{text}</button>
    //https://velog.io/@eenaree/props-onClick-type 해당내용 참고.
  );
}