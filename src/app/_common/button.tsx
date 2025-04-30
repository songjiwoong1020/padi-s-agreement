import styles from "./button.module.css";

type props = {
  text: string,
  buttonRef: React.Ref<HTMLButtonElement>,
  isDisabled: boolean,
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  text,
  buttonRef,
  isDisabled,
  handleClick}: props) {
  return (
    <button className={styles.btn} disabled={isDisabled} ref={buttonRef} onClick={handleClick}>{text}</button>
    //https://velog.io/@eenaree/props-onClick-type 해당내용 참고.
  );
}