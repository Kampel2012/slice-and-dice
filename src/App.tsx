import { Routes, Route } from 'react-router-dom';
import Cart from './components/pages/Cart';
import Main from './components/pages/Main';
import NotFound404 from './components/pages/NotFound404';

import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
