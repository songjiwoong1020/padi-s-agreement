import styles from "./input.module.css";

type props = {
  label: string,
  type: string
}

export default function Input({
  label,
  type
}: props) {
  return (
    <>
      <label>*{label}</label>
      <input type={type} className={styles['data-input']}/>
    </>
  );
}