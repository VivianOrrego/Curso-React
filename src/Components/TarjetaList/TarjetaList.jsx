/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TarjetaDetalle from '../TarjetaDetalle/TarjetaDetalle';
import { useParams } from 'react-router-dom'; 
import "./TarjetaList.css"
import { getFirestore, doc, getDoc } from 'firebase/firestore';

    const TarjetaList = () => {

        const [producto, setProducto] = useState([]);
        const {id} = useParams();

        useEffect(() => {

            //inicializamos la instancia de la base de datos
            const db = getFirestore()

            //Generamos el llamado al documento
            const nuevoDoc = doc(db, "productos", id)

            //hacemos el llamado al documento e imprimimos
            getDoc(nuevoDoc).then((res) =>{
                const data = res.data()
                const nuevoProducto = {id: res.id,...data}
                setProducto(nuevoProducto)
            })
            .catch(error => console.log(error))
        }, []);


    return (
        <div className='itemcontaier'>
            <TarjetaDetalle productos={producto}/>
        </div>
    )
}

export default TarjetaList
