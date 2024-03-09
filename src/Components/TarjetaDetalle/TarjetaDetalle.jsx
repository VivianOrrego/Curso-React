/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useContext} from 'react'
import { Card, Button } from 'react-bootstrap'
import Contador from '../Contador/Contador'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import 'typeface-quicksand'


const TarjetaDetalle = ({productos}) => {

    const [cart, setCart] = useState(false)

    const {agregarCarrito} = useContext(CartContext)

    const onAdd = (count) => {

        setCart(true)
        agregarCarrito(productos, count)

    }
    
        return (
    <>
        <Card style={{width: '18rem', margin: '30px',  }}>
            <Card.Img variant="top" src={productos.imagen} style={{ height: '18rem'  }}/>
            <Card.Body>
            <h3 style={{ textAlign: 'left', fontSize: '15px', fontFamily: 'Quicksand' }} >Producto: {productos.nombre}</h3>
            <h3 style={{ textAlign: 'left', fontSize: '15px', fontFamily: 'Quicksand' }} > Id: {productos.id} </h3>
            <h3 style={{ textAlign: 'left', fontSize: '15px', fontFamily: 'Quicksand' }} > Precio: $ {productos.precio} USD </h3>
            <h3 style={{ textAlign: 'left', fontSize: '15px', fontFamily: 'Quicksand' }} > Stock: {productos.stock}  </h3>

            {productos.stock == 0 ? <><h5>El Producto No Tiene Stock</h5> <Link to={'/'} style={{justifyContent:'center', width: '100%', }}>  <Button style={{fontSize: '15px', backgroundColor: 'black', color:'white', width: '99%', borderColor: 'white'}}>Seguir Comprando</Button> </Link></>  : (
                cart ? <><Link to={'/cart'} style={{justifyContent:'center', width: '100%', }}>  <Button style={{fontSize: '15px', backgroundColor: 'black', color:'white', width: '99%', borderColor: 'white'}}>Ir Al Carrito</Button> </Link> <Link to={'/'} style={{justifyContent:'center', width: '100%', }}>  <Button style={{fontSize: '15px', backgroundColor: 'black', color:'white', width: '99%', borderColor: 'white'}}>Seguir Comprando</Button> </Link></> : <Contador initial={1} stock={productos.stock}  onAdd={onAdd}/>
            ) }

            </Card.Body>
        </Card>         

    </>
    )
}

export default TarjetaDetalle