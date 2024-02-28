import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import CarWidget from './Components/CarWidget/CarWidget'
import ItemContainer from './Components/ItemContainer/ItemContainer'
import Error from './Components/Error/Error'
import TarjetaList from './Components/TarjetaList/TarjetaList'
import Cart from './Components/Cart/Cart'
import CartProvider from './context/CartContext'


function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <CarWidget/>
          <Routes>
            <Route path='/' element={<ItemContainer/>}/>
            <Route path='/categoria/:categoryId' element={<ItemContainer/>}/>
            <Route path='/detalle/:id' element={<TarjetaList/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
      </CartProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App

