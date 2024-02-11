/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import CarWidget from './Components/CarWidget/CarWidget'
import ItemContainer from './Components/ItemContainer/ItemContainer'
import Error from './Components/Error/Error'
import TarjetaList from './Components/TarjetaList/TarjetaList'



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <CarWidget/>
          <Routes>
            <Route path='/' element={<ItemContainer/>}/>
            <Route path='/categoria/:categoryId' element={<ItemContainer/>}/>
            <Route path='/detalle/:id' element={<TarjetaList/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

