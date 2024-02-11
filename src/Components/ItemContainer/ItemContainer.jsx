/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';

const ItemContainer = () => {

const [productos, setProductos] = useState([]);
const {categoryId} = useParams();

useEffect(() => {
    const fetchData = async () => {
        try {
            const resp = await fetch("/Productos/productos.json");
            const data = await resp.json()

            if (categoryId){
                        
                const filteredProducts = data.filter((p) => p.categoria == categoryId)
                setProductos(filteredProducts)
            }else{
                setProductos(data)
                
            }


        } catch (error) {
            console.log("Error: " + error)
        }
    }
    fetchData()
}, [categoryId])

    
    return (
    <div>
        <ItemListContainer productos={productos}/>
    </div>
    )
}

export default ItemContainer