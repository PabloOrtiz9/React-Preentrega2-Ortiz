import React from 'react';
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const About = () => {
  const navigate = useNavigate();
  
  return (
    <div > <Card className="justify-content-center">
      <Card.Body>
        <Card.Title>About</Card.Title>
            <p>Somos una empresa joven con lo mejor de la tecnologia pensado para el m</p>
            <Button onClick={()=>navigate(-1)} variant="danger" >Volver a Home</Button>{' '}
       </Card.Body>
      </Card> 
    </div>

  )
};
  
export default About;