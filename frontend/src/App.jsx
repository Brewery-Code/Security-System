import { BrowserRouter } from 'react-router-dom';

import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App
