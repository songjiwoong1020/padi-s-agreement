import styles from "./button.module.css";

export default function Button({text, disabled, onclick}: { text: string, disabled: boolean, onclick: Function }) {
  return (
    <button className={styles.btn} disabled={disabled} onClick={onclick}>{text}</button>
    //https://velog.io/@eenaree/props-onClick-type 해당내용 참고.
  );
}