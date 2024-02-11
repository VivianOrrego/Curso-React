import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Contador from '../Contador/Contador'


const TarjetaDetalle = ({productos}) => {
    
        return (
    <>
        <Card style={{width: '18rem'  }}>
            <Card.Img variant="top" src={productos.imagen} style={{ height: '18rem'  }}/>
            <Card.Body>
            <Card.Title>Producto: {productos.nombre}</Card.Title>
            <Card.Text> Id: {productos.id} </Card.Text>
            <Card.Text> Precio: $ {productos.precio} USD </Card.Text>
            <Card.Text> Stock: {productos.stock} </Card.Text>
            <Contador/>
            </Card.Body>
        </Card>
        

    </>
    )
}

export default TarjetaDetalle