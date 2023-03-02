import {useState, useEffect} from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList.js/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer =()=>{
    const[products, setProducts]=useState([])
    const{categoryId}=useParams()

    
    useEffect( ()=> {
        if(categoryId){
            getProductsByCategory(categoryId)
            .then(response => {
                setProducts(response)
            })

            .catch(error =>{
                console.log(error)
            })
        }
        else{
            getProducts()
            .then(response => {
                setProducts(response)
            })

            .catch(error =>{
                console.log(error)
            })
        }
 
    }, [categoryId])

    return(
        <div> 
            <h2> All products</h2>          
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer 