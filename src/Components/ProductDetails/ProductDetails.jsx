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
    getProducts(`https://api.escuelajs.co/api/v1/products/${id}`)
  },[])

  return (
    <div className='container row p-3 my-5 m-auto'>
     
      <div className='col-md-6'>
        <div className="card" style={{minHeight:'100%'}}>
          <div className="card-body">
            <h5 className="card-title py-3">{productList.title}</h5>
            <p className="card-text">{productList.description}</p>
            <input type='button' value='Back' className="btn btn-primary my-2" onClick={goBack} />
          </div>
        </div>
      </div>

    <div className="col-md-6">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={productList.images} className="card-img-top" alt={productList.title}/>
            </div>
            <div className="carousel-item">
            <img src={productList.images} className="card-img-top" alt={productList.title}/>
            </div>
            <div className="carousel-item">
            <img src={productList.images} className="card-img-top" alt={productList.title}/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

    </div>
  )
}
