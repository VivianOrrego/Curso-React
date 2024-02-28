/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import "./CarWidget.css"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CarWidget = () => {

  const {cantidadCarrito} = useContext(CartContext)
  
  return (
    <Link to={'/cart'} className='carrito'> 
        <img src="/Icono Carrito.svg" alt="icono"  className='bolsa_compras'/>
        <div className='contador'> <p> {cantidadCarrito() == 0 ? null : cantidadCarrito()} </p> </div>
      
    </Link>
  )
}
export default CarWidget

