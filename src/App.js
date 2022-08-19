import './App.css';

//Router dom 
import { Route , Redirect , Switch} from  'react-router-dom';

// the context
import ProductContexProvider from './Contex/ProductContexProvider';
import CardContextProvider from './Contex/CardContextProvider';
// components
import Store from './Component/Store';
import ProductDetails from './Component/ProductDetails';
function App() {
  return (
    <ProductContexProvider>
      <CardContextProvider>
        <Switch>
          <Route  path='/products/:id' component={ProductDetails}/>
          <Route path='/products' component={Store} />
          <Redirect to='/products'/>
        </Switch>
      </CardContextProvider>
    </ProductContexProvider>
  );
}

export default App;
