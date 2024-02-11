/* eslint-disable no-unused-vars */         
import React from 'react'
import "./ItemListContainer.css"
import Tarjetas from '../Tarjetas/Tarjetas'

const ItemListContainer = ({productos}) => {
  return (
    <div className='itemListContainer'>
      {
        productos.map((producto) => {
          return(
            <Tarjetas key={producto.id} producto={producto} />
          )
        })
      }
    </div>    
  )
}

export default ItemListContainer