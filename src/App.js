import './App.css';

//Router dom 
import { SwitchCase , Route , Redirect , Switch} from  'react-router-dom';

// the context
import ProductContexProvider from './Contex/ProductContexProvider';
// components
import Store from './Component/Store';
import ProductDetails from './Component/ProductDetails';
function App() {
  return (
    <ProductContexProvider>
      {/* <Store/> */}
      <Switch>
        <Route  path='/products/:id' component={ProductDetails}/>
        <Route path='/products' component={Store} />
        <Redirect to='/products'/>
      </Switch>
    </ProductContexProvider>
  );
}

export default App;
