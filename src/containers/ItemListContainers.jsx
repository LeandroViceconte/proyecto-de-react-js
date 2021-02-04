import React, {useState} from 'react';
import { ItemCount} from '../components/ItemCount';

const ItemListContainer = (props) => {

    const [contador, setContador] = useState(1)

    const onAdd = (stock) => {
        if (contador < stock) {
            setContador(contador + 1);
        } else {
            console.log("Nos quedamos sin stock");
        }
    }
    const onSubstract = (stock) => {
        if (contador > 1) {
            setContador (contador - 1);
        } else {
            console.log("error de cantidad minima")
        }
    }     
    

    return ( 
        <>  
         <ItemCount stock={12}  contador={contador} onAdd={onAdd} onSubstract={onSubstract} />
        </>
    )
  }
  export default ItemListContainer;