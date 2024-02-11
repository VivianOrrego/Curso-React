/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TarjetaDetalle from '../TarjetaDetalle/TarjetaDetalle';
import { useParams } from 'react-router-dom'; 
import "./TarjetaList.css"

    const TarjetaList = () => {

        const [producto, setProducto] = useState([]);
        const {id} = useParams();

        useEffect(() => {

            const fetchData = async () => {
                try {
                    const resp = await fetch("/Productos/productos.json");
                    const data = await resp.json()
                    const detalle = data.find((p) => p.id == id)

                    setProducto(detalle)
                } catch (error) {
                    console.log("Error: " + error)
                }
            }

            fetchData()
        }, []);


    return (
        <div className='itemcontaier'>
            <TarjetaDetalle productos={producto}/>
        </div>
    )
}

export default TarjetaList
