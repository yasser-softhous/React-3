import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Product} from '../Product/Product.jsx'


export const Products = () => {

  const [productList,setProductList]=useState([])

  const getProducts=async(url)=>{
  try {
    const res= await axios.get(url)
    const respons=res.data
    setProductList(respons)
  } catch (error) {

    console.log(error)
  }

  }

  useEffect(()=>{
    getProducts('https://fakestoreapi.com/products')
  },[])
  return (
    <div className='container row p-2'>
      {
        productList.map((item)=>{
          return <Product key={item.id} obj={item}/>
        })
      }
    </div>
  )
}
