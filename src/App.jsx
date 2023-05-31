import { Routes, Route } from 'react-router-dom';
import Cart from './components/pages/Cart';
import Main from './components/pages/Main';
import EmptyCart from './components/pages/EmptyCart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/emptycart" element={<EmptyCart />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
