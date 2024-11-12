import { useState } from 'react';

import Modals from '../../../../components/modals/Modals';
import NewDevice from '../../../../components/Modals/NewDevice/NewDevice';

import styles from './LoggedIn.module.css';

export default function LoggedIn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => { setIsModalOpen(prev => !prev) }
  const chosenModal = <NewDevice />;
  return (
    <>
      <section className={styles.home}>
        <div className={styles['top-bar']}>
          <div className="">
            <button className={styles['top-bar__new']}
              onClick={toggleModal}
            >New +</button>
          </div>
          <h3 className={styles['top-bar__name']}>Name</h3>
          <h3 className={styles['top-bar__email']}>E-mail@example.com</h3>
        </div>
        <div className={styles.devices}>
          <div className={styles.devices__item}>Item</div>
        </div>
        <div className={styles.indicators}>Test</div>
      </section>
      <Modals isModalOpen={isModalOpen} toggleModal={toggleModal} chosenModal={chosenModal} />
    </>
  );
}