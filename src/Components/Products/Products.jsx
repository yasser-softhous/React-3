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
    getProducts('https://api.escuelajs.co/api/v1/products?offset=10&limit=10')
  },[])
  return (
    <div className='m-4 m-auto  row '>
      {
        productList.map((item)=>{
          return <Product key={item.id} obj={item}/>
        })
      }
    </div>
  )
}
