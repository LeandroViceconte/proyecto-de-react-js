import * as React from "react";
import { ItemCount} from '../../src/components/ItemCount';
import ItemList from '../components/ItemList'
import productList from '../Products/productList'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout (() => resolve(productList), 3000);  });
            
            myPromise.then((result) => setProducts(result));        
    }, [])

    return  (
        <div>
            <h2>{greeting}</h2>
        <ItemList products={products} /> 
        </div>
    )
            
  }
  export default ItemListContainer;