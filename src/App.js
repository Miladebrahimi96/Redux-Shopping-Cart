import './App.css';
import { Routes , Route, Navigate} from "react-router-dom";
import { Provider } from 'react-redux';

//components
import Store from './components/Store';
import ProductDetails from './components/shared/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

//Redux
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/products' element={<Store/>} />
          {/* <Route path='/products/:id' element={<ProductDetails/>} /> */}
          {/* <Route path='/cart' element={<ShopCart />} /> */}
          <Route path='/*' element={<Navigate to="/products" />} />
        </Routes>
    </Provider>
  );
}

export default App;
