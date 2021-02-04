
export const ItemCount = ({stock, onAdd, contador,  onSubstract}) => {

    
    return (
        <>
        <button onClick = {onSubstract} >-</button>
        <b>{contador}</b>
        <button onClick ={() => {onAdd(stock)}}>+</button>
         
         <div>
        <button>Comprar</button> 
        </div>
        </>
    );
};