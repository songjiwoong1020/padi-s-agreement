import styles from "./button.module.css";

export default function Button({text, disabled}: { text: string, disabled: boolean }) {
  return (
    <button className={styles.btn} disabled={disabled} >{text}</button>
    //https://velog.io/@eenaree/props-onClick-type 해당내용 참고.
  );
}