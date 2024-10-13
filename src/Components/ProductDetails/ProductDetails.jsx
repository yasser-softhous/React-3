import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'


export const ProductDetails = () => {
  const navTo=useNavigate()
  const {id}=useParams()
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
  const goBack=()=>{
    navTo(-1)
  }
  useEffect(()=>{
    getProducts(`https://fakestoreapi.com/products/${id}`)
  },[])

  return (
    <div className='container row p-3 my-5 m-auto'>
      <div className="col-md-6">
      <img src={productList.image} className="card-img-top" alt={productList.title}/>
      </div>
      <div className='col-md-6 '>

      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{productList.title}</h5>
          <p className="card-text">{productList.description}</p>
          <input type='button' value='Back' className="btn btn-primary" onClick={goBack}/>
        </div>
      </div>
    </div>
    </div>
  )
}
