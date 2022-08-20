import './App.css';

//Router dom 
import { Route , Redirect , Switch} from  'react-router-dom';

// the context
import ProductContexProvider from './Contex/ProductContexProvider';
import CardContextProvider from './Contex/CardContextProvider';
// components
import Store from './Component/Store';
import ProductDetails from './Component/ProductDetails';
import Navbar from './Component/Navbar';
import ShopCards from './Component/ShopCards';
function App() {
  return (
    <ProductContexProvider>
      <CardContextProvider>
        <Navbar/>
        <Switch>
          <Route path='/cards' component={ShopCards}/> 
          <Route  path='/products/:id' component={ProductDetails}/>
          <Route path='/products' component={Store} />
          <Redirect to='/products'/>
        </Switch>
      </CardContextProvider>
    </ProductContexProvider>
  );
}

export default App;
