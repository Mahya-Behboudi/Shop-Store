import React , {useEffect , useState , createContext} from 'react';
// FAKE product api
import { getProducts } from '../Services/api';
export const ProductContex = createContext()
const ProductContexProvider = ({children}) => {
    const [products , setProducts] = useState([])
    useEffect(() => {
         const fetchAPI= async () => {
            setProducts(await getProducts())
        }
        fetchAPI();
    },[])
    return (
        <div>
            <ProductContex.Provider value={products}>
                {children}
            </ProductContex.Provider>    
        </div>
    );
};

export default ProductContexProvider;