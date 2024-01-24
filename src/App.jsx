/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */

import React, {useState} from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import CarWidget from './Components/CarWidget/CarWidget'


function App() {

  const Productos = [
    {
      "imagen": "camisetas.jpg",
      "producto": "Camisetas",
      "precio": "15"
    },
    {
      "imagen": "gorras.jpeg",
      "producto": "Gorras",
      "precio": "20"
    },
    {
      "imagen": "pantalones1.jpg",
      "producto": "Panalones",
      "precio": "35"
    },
    {
      "imagen": "imanes1.jpg",
      "producto": "Imanes",
      "precio": "10"
    },
    {
      "imagen": "pulseras1.jpg",
      "producto": "Pulseras",
      "precio": "5"
    }
  ]

  return (
    <>

    <NavBar/>
    <CarWidget/>
    {
      Productos.map((prod) => {
        return(
          <ItemListContainer imagen={prod.imagen} producto={prod.producto} precio={prod.precio} />
        )

      })
    }
    </>
  )
}

export default App

