/* eslint-disable no-unused-vars */
import React, {useContext, useState} from 'react'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import { Button } from 'react-bootstrap'
import { db } from '../../Firebase/config'
import "./Checkout.css"
import { Link } from 'react-router-dom'

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
<>      
        
        <div className='contGeneral'>
        <div style={{width:"30%", marginTop:"10px"}}>
                {/* Mapeo de productos */}
                {cart.map((productos) => (
                    <div key={productos.productos.id}>

                    <div className='contOrden'>
                    <div >
                        <img src={productos.productos.imagen} alt="" style={{width:"85px", height:"110px", margin:"10px" }}/>
                    </div>
                    <div style={{marginTop:"5px"}}>
                        <p className='parrafo'>Producto: {productos.productos.nombre}</p>
                        <p className='parrafo'>Precio Unid: ${productos.productos.precio} Usd.</p>
                        <p className='parrafo'>Cantidad: {productos.cantidad}</p>
                        <p className='parrafo'>Precio Total: ${productos.productos.precio * productos.cantidad} Usd. </p>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
            <div style={{width:"70%", paddingRight:"350px"}}>
            {cart <= 0 ? null : <div >
            <h1 className='titulo'>Ingresa Tus Datos</h1>
            <form onSubmit={manejadorFormulario}>

            {/* Campos del formulario */}

            <div style={{ width:"100%", textAlign:"center", marginTop:"30px" }}>
                <div >

                    <input type="text" placeholder="Nombre" className='formulario'  onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div>
                    <input type="text" placeholder="Apellido" className='formulario' onChange={(e) => setApellido(e.target.value)}/>
                </div>
                <div>
                    <input type="text" placeholder="Celular" className='formulario' onChange={(e) => setCelular(e.target.value)}/>
                </div>
                <div>
                    <input type="email" placeholder="Mail" className='formulario' onChange={(e) => setMail(e.target.value)}/>
                </div>
                <div>
                    <input type="email" placeholder="Mail de Confirmacion" className='formulario' onChange={(e) => setMailConfirmacion(e.target.value)}/>
                </div>
                <h6 className='totalCarrito'>Total Carrito: ${totalCarrito()} Usd. </h6>
                <Button type="submit" style={{fontSize: '15px', backgroundColor: 'black', color:'white', width: '245px', borderColor: 'white', marginTop: '20px', textAlign: 'center'}}>Completar Compra</Button>
                
            </div>
            

            </form>
        </div> }
            </div>
            
        </div>
        <div >  
                {error &&  <p style={{color: "red"}}> {error} </p> }

                {ordenId && (
                    <div className='orden'>
                    <h2 >
                        ¡Gracias por tu compra {nombre} {apellido}!
                    </h2>
                        <h5>Tu numero de orden es: {ordenId}</h5>
                        <Link to={'/'} >  <Button variant="dark" style={{ textAlign: 'center', width: '375px', marginTop: '10px', marginBottom: '50px' }}>Realizar Otra Compra </Button> </Link>
                        </div>
                    
                )}
        </div>
    </>              
    )
} 


export default Checkout