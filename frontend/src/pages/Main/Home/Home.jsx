import NotLoggedIn from './NotLoggedIn/NotLoggedIn';
import LoggedIn from './LoggedIn/LoggedIn';

import styles from './Home.module.css';

export default function Home({ isUserLogin, toggleUserLogin }) {

  return (
    <>
      {isUserLogin ? <LoggedIn /> : <NotLoggedIn toggleUserLogin={toggleUserLogin} />}
    </>
  );
}