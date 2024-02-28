/* eslint-disable no-unused-vars */

import React, { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'


const Cart = () => {

    const {cart, vaciarCarrito, eliminarItem, totalCarrito} = useContext(CartContext)
    
    return (
    <>
            {cart.length == 0 
            ?
            <div>
                <h1>No Hay Productos En El Carrito</h1>
                <Link to={"/"}>IR AL INICIO</Link>
            </div>        
            :
            <div>
                <h1>Lista De Carrito</h1>
                
                    {cart.map((p)=>(
                        <CartItem key={p.id} productos={p} eliminarItem={eliminarItem} />
                        ))}
                <p>Total Carrito : ${totalCarrito()} </p>
                <button onClick={vaciarCarrito}>
                    Vaciar Carrito
                </button>
            </div>

        }
        </>
    )
}

export default Cart;