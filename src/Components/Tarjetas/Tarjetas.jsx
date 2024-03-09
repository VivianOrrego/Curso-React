/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./Tarjetas.css"
import 'typeface-quicksand'

const Tarjetas = ({producto}) => {
  const {id, imagen, nombre, precio} = producto;
  return (
    <>
          <NavLink to={`/detalle/${producto.id}`}> 
            <div className='contenedor' key={id}>
              <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" src={imagen} className='img'/>
                    <Card.Body>
                    <h3 style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Quicksand' }} >{nombre}</h3>
                    <h3 style={{ textAlign: 'center', fontSize: '15px', fontFamily: 'Quicksand' }} >$ {precio} USD</h3>
                    <Button variant="dark" style={{ textAlign: 'center', width: '100%', marginTop: '10px', }}>Agregar al Carrito</Button>
                  </Card.Body>
                </Card>            
              </div>
          </NavLink>
    </>
  )
} 

export default Tarjetas


