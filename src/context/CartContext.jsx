/* eslint-disable no-unused-vars */
import React,{ useState, createContext } from "react";
import Contador from "../Components/Contador/Contador";

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])


    const agregarCarrito = (productos, cantidad) =>{
        
        const productoExistente = cart.findIndex(prod => prod.productos.id == productos.id)

        if(productoExistente == -1){
            setCart([...cart, {productos, cantidad}])
        }else{
            const newCart = [...cart]
            newCart[productoExistente].cantidad += cantidad
            setCart(newCart)
        }
    }
    const eliminarItem = (productoID) =>{
        
        const newCart = cart.filter(item => item.productos.id !== productoID)
        setCart(newCart)
    }
    const vaciarCarrito = () =>{
        setCart([])
    }
    const cantidadCarrito = () =>{
        const totalProductos = cart.reduce((total, item) => total+item.cantidad,0)
        return totalProductos
    }
    const totalCarrito = () =>{
        const totalPrice = cart.reduce((total, item) => total + (item.productos.precio * item.cantidad),0)
        return totalPrice
    }



    console.log(cart)
    return(
        <CartContext.Provider value ={{
            cart,
            agregarCarrito,
            eliminarItem,
            vaciarCarrito,
            cantidadCarrito,
            totalCarrito
        }}>
            {children}
        </CartContext.Provider>

    )

}


export default CartProvider
