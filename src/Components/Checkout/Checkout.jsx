/* eslint-disable no-unused-vars */
import React, {useContext, useState} from 'react'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import { Button } from 'react-bootstrap'
import { db } from '../../Firebase/config'

const Checkout = () => {
    //Informacion del context
    const {cart, totalCarrito, vaciarCarrito} = useContext(CartContext)
    //Datos del componente
        const [nombre, setNombre] = useState("")
        const [apellido, setApellido] = useState("")
        const [celular, setCelular] = useState("")
        const [mail, setMail] = useState("")
        const [mailConfirmacion, setMailConfirmacion] = useState("")
        const [error, setError] = useState("")
        const [ordenId, setOrdenId] = useState("")

        //Submit
        const manejadorFormulario = () => {
            event.preventDefault()
            
            if(!nombre || !apellido || !celular || !mail || !mailConfirmacion){
                setError("Llenar todos los campos")
                return;
            }
            
            if(mail !== mailConfirmacion){
                setError("Los Email no coinciden")
                return;
            }

            //objeto para la orden de compra que se envia a la base de datos

            const orden = {
                items: cart.map((producto) => ({
                    id: producto.productos.id,
                    nombre: producto.productos.nombre,
                    cantidad: producto.cantidad
                })), 
                total: totalCarrito(),
                fecha: new Date(),
                nombre,
                apellido,
                celular, 
                mail
            }

            //Logica para la orden y la reduccion de stock

            Promise.all(

                orden.items.map(async (productoOrden) =>{
                    const productoRef = doc(db, "productos", productoOrden.id)
                    const productoDoc = await getDoc(productoRef)
                    const stockActual = productoDoc.data().stock
        
                    await updateDoc(productoRef, {
                        stock: stockActual - productoOrden.cantidad
                    })
                })
            )
            .then(() =>{
            addDoc(collection(db,"ordenes"),orden)
                .then((docRef) =>{
                    setError("")
                    setOrdenId(docRef.id)
                    vaciarCarrito()
            })
            .catch((error) =>{
                setError("Se produjo un error al crear la orden")
                console.log(error)
            })
            .catch((error) =>{
            setError("No se puede actualizar el stock")
            console.log(error)
            })
        }) 
    }
    
console.log(nombre)

    return (
        <div>
            <h1>Ingresa Tus Datos</h1>
            <form onSubmit={manejadorFormulario}>

            {/* Mapeo de productos */}
            {cart.map((productos) => (
                <div key={productos.productos.id}>

                <p>
                    {""}
                    {productos.productos.nombre} x {productos.cantidad}
                </p>
                <hr />

                </div>
            ))}

            {/* Campos del formulario */}

            <div>
                <div>
                    <label>Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)}/>
                </div>
                <div>
                    <label>Celular</label>
                    <input type="text" onChange={(e) => setCelular(e.target.value)}/>
                </div>
                <div>
                    <label>Mail</label>
                    <input type="email" onChange={(e) => setMail(e.target.value)}/>
                </div>
                <div>
                    <label>MailConfirmacion</label>
                    <input type="email" onChange={(e) => setMailConfirmacion(e.target.value)}/>
                </div>

                <Button type="submit">Completar Compra</Button>
                
                {error &&  <p style={{color: "red"}}> {error} </p> }

                {ordenId && (
                    <h3>
                        ¡Gracias por tu compra! Tu numero de orden es: {ordenId}
                    </h3>
                    
                )}
            </div>

            </form>
        </div>
                
    )
} 


export default Checkout