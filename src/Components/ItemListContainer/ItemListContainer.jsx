/* eslint-disable no-unused-vars */         
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./ItemListContainer.css"

export const ItemListContainer = ( {imagen, producto, precio}  ) => {
  return (
    <div  className='contenedor'>
      <div className='productos'>
        <div className='cards'>
          <div className='row'>
      <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src={imagen} />
            <Card.Body>
            <Card.Title>{producto}</Card.Title>
            <Card.Title>
                      $ {precio} USD
            </Card.Title>
            <Button variant="dark">Aagregar al Carrito</Button>
          </Card.Body>
        </Card>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer