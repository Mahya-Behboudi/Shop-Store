import './App.css';
// the context
import ProductContexProvider from './Contex/ProductContexProvider';
// components
import Store from './Component/Store';
function App() {
  return (
    <ProductContexProvider>
      <Store/>
    </ProductContexProvider>
  );
}

export default App;
