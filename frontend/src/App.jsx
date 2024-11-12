import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const toggleUserLogin = () => { setIsUserLogin(prev => !prev) }

  const isTokenExpired = () => {
    try {
      const payload = JSON.parse(atob(localStorage.getItem('access_token').split('.')[1]));
      const expiryTime = payload.exp * 1000;
      console.log(expiryTime);
      return Date.now() > expiryTime;
    } catch (error) {
      console.error('Помилка декодування токену:', error);
      localStorage.clear();
      toggleUserLogin();
      return true;
    }
  }

  const [isAccessTokenValid, setIsAccessTokenValid] = useState(false);
  const [isRefreshTokenValid, setIsRefreshTokenValid] = useState(false);

  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    const accessTokenValid = !isTokenExpired(accessToken);
    const refreshTokenValid = !isTokenExpired(refreshToken);
    setIsAccessTokenValid(accessTokenValid);
    setIsRefreshTokenValid(refreshTokenValid);

    setIsUserLogin(accessTokenValid || refreshTokenValid);
  }, []);



  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Main isUserLogin={isUserLogin} toggleUserLogin={toggleUserLogin} />
      </div>
    </BrowserRouter>
  )
}

export default App
