import { Routes, Route } from 'react-router-dom';
import Cart from './components/pages/Cart';
import Main from './components/pages/Main';
import EmptyCart from './components/pages/EmptyCart';
import NotFound404 from './components/pages/NotFound404';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/emptycart" element={<EmptyCart />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
