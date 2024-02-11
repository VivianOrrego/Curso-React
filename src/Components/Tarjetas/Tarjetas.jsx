/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./Tarjetas.css"

const Tarjetas = ({producto}) => {
  const {id, imagen, nombre, precio} = producto;
  return (
    <>
  
          <NavLink to={`/detalle/${producto.id}`}> 
            <div className='contenedor' key={id}>
              <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" src={imagen} className='img'/>
                    <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>{nombre}</Card.Title>
                    <Card.Title style={{ textAlign: 'center' }}>$ {precio} USD</Card.Title>
                    <Button variant="dark" style={{ textAlign: 'center', width: '100%', marginTop: '10px', }}>Agregar al Carrito</Button>
                  </Card.Body>
                </Card>            
              </div>
          </NavLink>

    </>
  )
} 

export default Tarjetas


