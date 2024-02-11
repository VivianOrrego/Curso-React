/* eslint-disable no-unused-vars */
import React from 'react'
import "./CarWidget.css"


export const CarWidget = () => {
  return (
    <div className='carrito'> 
        <img src="/Icono Carrito.svg" alt="icono"  className='bolsa_compras'/>
        <div className='contador'> <p>0</p></div>
      
    </div>
  )
}
export default CarWidget

