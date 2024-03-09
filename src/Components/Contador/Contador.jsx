/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { Button } from 'react-bootstrap'

const Contador = ({initial, stock, onAdd}) => {

    const [contador, setContador] = useState(1)

    const decrementar = () => {
        if(contador > initial) {
            setContador(contador - 1)
        }
    }

    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }

    const agregarCarrito = () => {
        onAdd(contador)
    }

    return (
    <>
        <div>
        <Button  variant="dark" onClick={decrementar} style={{fontSize: '15px', backgroundColor: 'black', justifyContent:'center', color:'white', margin:'1px' }}>-</Button>
        <Button  variant="dark" style={{fontSize: '15px', backgroundColor: 'black', justifyContent:'center', color:'white', margin:'1px'  }}>{contador}</Button>
        <Button  variant="dark" onClick={incrementar} style={{fontSize: '15px', backgroundColor: 'black', justifyContent:'center', color:'white', margin:'1px' }}>+</Button>
        <Button  variant="dark" className='' onClick={agregarCarrito} style={{fontSize: '15px', backgroundColor: 'black', color:'white', margin:'1px'  }}>Agregar al carrito</Button>
        </div>
    </>
    )
}

export default Contador