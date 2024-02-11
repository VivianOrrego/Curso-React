import React,{useState} from 'react'
import { Button } from 'react-bootstrap'

const Contador = () => {

    const [contador, setContador] = useState(1)

    const decrementar = () => {
        if(contador > 1) {
            setContador(contador - 1)
        }
    }

    const incrementar = () => {
        if(contador < 10) {
            setContador(contador + 1)
        }
    }

    const agregarCarrito = () => {
        alert("AGREGASTE" + " " + contador + " " + "PRODUCTOS AL CARRITO")
    }

    return (
    <>
        <div>
        <Button  variant="dark" onClick={decrementar} style={{fontSize: '15px', backgroundColor: 'violet', textAlign:'center', color:'black' }}>-</Button>
        <Button  variant="dark" style={{fontSize: '15px', backgroundColor: 'violet', textAlign:'center', color:'black'  }}>{contador}</Button>
        <Button  variant="dark" onClick={incrementar} style={{fontSize: '15px', backgroundColor: 'violet', textAlign:'center', color:'black' }}>+</Button>
        <Button  variant="dark" className='' onClick={agregarCarrito} style={{fontSize: '15px', backgroundColor: 'violet', color:'black'  }}>Agregar al carrito</Button>
        </div>
    </>
    )
}

export default Contador