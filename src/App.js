import './App.css';

//components
import Store from './components/Store';

//contexts
import ProductContextProvider from './contexts/ProductContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
}

export default App;
