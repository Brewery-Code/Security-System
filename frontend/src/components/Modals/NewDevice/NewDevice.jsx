import { useState } from 'react';
import styles from './NewDevice.module.css';

export default function NewDevice() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(formData);
  }

  return (
    <div className={styles.body}>
      <div className={styles.body__title}>Add new device</div>
      <form className={styles.form}>
        <div className={styles.form__item}>
          <label className={styles.form__label} htmlFor="name">Name</label>
          <input className={styles.form__input}
            type="text"
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.form__item}>
          <label className={styles.form__label} htmlFor="number">Serial number</label>
          <input className={styles.form__input}
            type="text"
            name='number'
            placeholder='Serial number'
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <button className={styles.form__button}>Add device</button>
      </form>
    </div>
  );
}