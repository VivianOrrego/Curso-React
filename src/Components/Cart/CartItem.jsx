/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import React from "react";

const CartItem = ({productos, eliminarItem}) => {
    console.log(productos)
    return (
        <div>
            <h3> {productos.productos.nombre} </h3>

            <img src={productos.productos.imagen} alt="" />

            <p>cantidad:{productos.cantidad} </p>

            <p>Valor Unitario: ${productos.productos.precio } </p>

            <p>Valor Total: ${productos.productos.precio * productos.cantidad} </p>

            <button onClick={()=> eliminarItem(productos.productos.id)}>Eliminar producto</button>
        </div>
    )
}

export default CartItem;