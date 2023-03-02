//import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import React from 'react';
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom"
import Container from "react-bootstrap/esm/Container";


const Item = ({product})=>{
    const navigate = useNavigate();
    return(
    <Container  className="justify-content-around">
      <Row className="justify-content-around">
        <Card style={{ width: '30rem' }}>
            <Card.Body>
                <div>
                    <img src={product.img} alt={product.name} style={{width:300}}/>
                  
                    <h3>{product.name}</h3>
                    <p>$ {product.price}</p>           
                    <Button variant="primary" onClick={()=>navigate(`/detail/${product.id}`)}>Ver detalle</Button>
                </div>
            </Card.Body>
        </Card>
      </Row>
      <br></br>  
    </Container>
    )
}

export default Item