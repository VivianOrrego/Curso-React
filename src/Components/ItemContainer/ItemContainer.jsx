/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from "firebase/firestore"
import { db } from '../../Firebase/config';

const ItemContainer = () => {

const [productos, setProductos] = useState([]);
const {categoryId} = useParams();

useEffect(() => {

    //Filtrado de productos
    const misProductos = categoryId ? query(collection(db, "productos"), where("categoria", "==", categoryId)) :  collection(db, "productos")

    //Generamos los documentos solicitados

    getDocs(misProductos).then((res) => {
        const nuevosProductos = res.docs.map((doc) =>{
            const data = doc.data()
            return {id: doc.id,...data}
        })
        setProductos(nuevosProductos)
    })
    .catch((error) => console.log(error))
    
}, [categoryId])

    return (
    <div>
        <ItemListContainer productos={productos}/>
    </div>
    )
}

export default ItemContainer