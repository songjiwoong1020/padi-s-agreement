import styles from "./input.module.css";

export default function Input({ label, type }: {label: string, type: string }) {
  return (
    <>
      <label>*{label}</label>
      <input type={type} className={styles['data-input']}/>
    </>
  );
}