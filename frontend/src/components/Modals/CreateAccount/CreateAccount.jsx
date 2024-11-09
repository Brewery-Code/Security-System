import { useState } from 'react';
import Modals from '../Modals';
import SignIn from '../SignIn/SignIn';
import styles from './CreateAccount.module.css';

export default function CreateAccount({ choseModal }) {
  return (
    <>
      <div className={styles.body}>
        <h1 className={styles.body__title}>Create Account</h1>
        <h2 className={styles.body__subtitle}>
          <span>Already have an account?</span>
          <div
            onClick={() => {
              choseModal('Sign In');
            }}
          >Sign In.</div>
        </h2>
        <form className={styles.form}>
          <div className={styles.form__item}>
            <label className={styles.form__label} htmlFor="">E-mail</label>
            <input className={styles.form__input} type="email" name="" id="" />
          </div>
          <div className={styles.form__item}>
            <label className={styles.form__label} htmlFor="">Password</label>
            <input className={styles.form__input} type="password" name="" id="" />
          </div>
          <button className={styles.form__button} type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}