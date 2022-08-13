import './App.css';
import { Routes , Route, Navigate} from "react-router-dom";

//components
import Store from './components/Store';

//contexts
import ProductContextProvider from './contexts/ProductContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path='/products' element={<Store/>} />
        <Route path='/*' element={<Navigate to="/products" />} />
      </Routes>
    </ProductContextProvider>
  );
}

export default App;
