import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Product} from '../Product/Product.jsx'
import { Loading } from '../Loading/Loading.jsx'


export const Products = () => {

  //create variables
  const [isLoading,setIsLoading]=useState(false)
  const [productList,setProductList]=useState([])
  const [pageNo,setPageNo]=useState(0)

  const goNext=()=>{
    setPageNo(pageNo+10)
  }

  const goPrevious=()=>{
    pageNo != 0 ? setPageNo(pageNo-10) : ''
  }

  const getProducts=async(url)=>{
    setIsLoading(true)
  try {
    const res= await axios.get(url)
    const respons=res.data
    setProductList(respons)
  }catch (error) {
    console.log(error)
  }finally{
    setIsLoading(false)
  }

  }

  useEffect(()=>{
    getProducts('https://api.escuelajs.co/api/v1/products?offset='+pageNo+'&limit=10')
  },[pageNo])

  return (
    <div className='m-4 m-auto  row'>
    
    {isLoading==true   ?
        <Loading />
      :
        productList.map((item)=>{
          return <Product key={item.id} obj={item}/>
        })
       
         
    
    }
      <nav aria-label="Page navigation example" className='m-auto'>
              <ul className="pagination">
                <li className="page-item">
                  <button  className="page-link "onClick={goPrevious}>Previous</button>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <button className="page-link" onClick={goNext}>Next</button></li>
              </ul>
      </nav>
       </div>
  )
}
