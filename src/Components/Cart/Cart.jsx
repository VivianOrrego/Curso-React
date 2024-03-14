/* eslint-disable no-unused-vars */

import React, { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import './Cart.css'
import { Button } from 'react-bootstrap'
import 'typeface-quicksand'


const Cart = () => {

    const {cart, vaciarCarrito, eliminarItem, totalCarrito} = useContext(CartContext)
    
    return (
    < >
            {cart.length == 0 
            ?
            <div style={{width: '100%', textAlign: 'center', marginTop: '150px' }}> 
                
                <h1 style={{ textAlign: 'center', fontSize: '40px', fontFamily: 'Quicksand', marginTop: '20px' }} >No Hay Productos En El Carrito</h1>
                <Link to={'/'} style={{justifyContent:'center', width: '100%', }}>  <Button style={{fontSize: '15px', backgroundColor: 'black', color:'white', width: '10%', borderColor: 'white', marginTop: '50px'}}>Ver Produtos</Button> </Link>

            </div>        
            :
            <div className='contenedorCarrito2'>
                <h2 style={{ textAlign: 'center', fontSize: '40px', fontFamily: 'Quicksand', marginTop: '20px' }}>Lista De Carrito</h2>
                    
                    <div >
                        {cart.map((p)=>(
                            <div className='contenedorCarritoItem' key={p.productos.id}>
                                <CartItem  productos={p} eliminarItem={eliminarItem} />
                            </div>
                        ))}
                    </div>

                <h4>Total Carrito : ${totalCarrito()} </h4>
                
                <Button onClick={vaciarCarrito} variant="dark" className='boton' >Vaciar Carrito</Button>

                <Link to={'/Checkout'} >  <Button variant="dark" className='boton'>Completar La Compra</Button> </Link>
                
                <Link to={'/'} >  <Button variant="dark" className='boton' style={{marginBottom:"20px"}}>Seguir Comprando</Button> </Link>
                
                
                </div>

        }
        </>
    )
}

export default Cart;