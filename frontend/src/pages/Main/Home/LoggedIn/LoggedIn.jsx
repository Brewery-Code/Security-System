import { useState, useEffect } from 'react';

import Modals from '../../../../components/modals/Modals';
import NewDevice from '../../../../components/Modals/NewDevice/NewDevice';

import styles from './LoggedIn.module.css';

export default function LoggedIn({ userData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => { setIsModalOpen(prev => !prev) }
  const chosenModal = <NewDevice />;

  const [devicesData, setDevicesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await fetch('http://localhost:8000/sensors/get/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Помилка при завантаженні даних');
        }
        const result = await response.json();
        setDevicesData(result); // Зберігаємо отримані дані у стан
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <section className={styles.home}>
        <div className={styles['top-bar']}>
          <div className="">
            <button className={styles['top-bar__new']}
              onClick={toggleModal}
            >
              New +
            </button>
          </div>
          <h3 className={styles['top-bar__name']}>{userData.name}</h3>
          <h3 className={styles['top-bar__email']}>{userData.email}</h3>
        </div>
        {devicesData.length > 0 ? (
          devicesData.map((device) => (
            <>
              <div key={1} className={styles.devices}>
                <div className={styles.devices__item}>{device.name}</div>
              </div>
              <div className={styles.indicators}>{device.sensor_value}</div>
            </>
          ))
        ) : (
          <>
            <div key={1} className={styles.devices}>
              <div className={styles.devices__item}>Item</div>
            </div>
            <div className={styles.indicators}>Test</div>
          </>
        )}
      </section>
      <Modals isModalOpen={isModalOpen} toggleModal={toggleModal} chosenModal={chosenModal} />
    </>
  );
}