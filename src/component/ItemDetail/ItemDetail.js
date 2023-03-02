import ItemCount from "../ItemCount/itemCount";

const ItemDetail=({id, name, img, description, price, stock})=>{

    const handleOnAdd=(quantity)=>{
        console.log("Se agrego "+ quantity+" productos al carrito");
    }
    return(
        <div>
             <h1>{name}</h1>
            <img src={img} alt={name} style={{width:350}}/>
            <p> {description}</p>
            <h2>${price}</h2>
            { stock > 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/>: <h1> Sin stock </h1>}
        </div>
       
    )
}

export default ItemDetail