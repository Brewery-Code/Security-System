import styles from './NewDevice.module.css';

export default function NewDevice() {
  return (
    <div className={styles.body}>
      <div className={styles.body__title}>Add new device</div>
      <form className={styles.form}>
        <div className={styles.form__item}>
          <label className={styles.form__label} htmlFor="">Name</label>
          <input className={styles.form__input} type="text" />
        </div>
        <div className={styles.form__item}>
          <label className={styles.form__label} htmlFor="">Serial number</label>
          <input className={styles.form__input} type="text" />
        </div>
        <button className={styles.form__button}>Add device</button>
      </form>
    </div>
  );
}