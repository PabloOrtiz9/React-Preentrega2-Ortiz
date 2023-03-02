import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import {useState} from 'react'


const ItemCount = ( {stock, onAdd})=>{
    const[count, setCount]= useState(1)
    
    const decrement=()=>{
        if(count>1){
            setCount(prev => prev - 1)
        }
    }

    const increment=()=>{
        if(count < stock){
            setCount(prev => prev + 1)
        }
        
    }
    return (
        <div>
            <p>{count}</p>
            <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-around">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button onClick={decrement}>-</Button> 
                    <Button onClick={increment}>+</Button> 
                <Button onClick={()=> onAdd(count)} disabled={count===0}>Agregar producto</Button>
            </ButtonGroup>
            </ButtonToolbar>
        </div>
        
    )
}

export default ItemCount