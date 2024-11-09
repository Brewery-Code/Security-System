import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home/Home';

import styles from './Main.module.css';

export default function Main() {
  return (
    <div className='main'>
      <div className='main__container'>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}