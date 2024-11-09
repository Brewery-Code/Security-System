import LogoImg from '../../assets/img/logo.png';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='header__container'>
        <div className={styles.header__body}>
          <div className={styles.logo}>
            <img className={styles.logo__img} src={LogoImg} alt="LogoImg" />
            <div className={styles.logo__title}>Security System</div>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>GitHub</li>
              <li className={styles.nav__item}>University</li>
              <li className={styles.nav__item}>About Us</li>
              <li className={styles.nav__item}></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}