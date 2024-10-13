import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Product = (props) => {
  const navTo =useNavigate()

  const viewDetails=(id)=>{
    navTo(`/products/${id}`)
  }

  return (
    <div className='col-md-6 col-lg-4 col-xl-3 p-2'>
      <div className="card" style={{ width: '250px' }}>
        <img src={props.obj.image} className="card-img-top" alt={props.obj.title}/>
        <div className="card-body">
          <h5 className="card-title">{props.obj.title}</h5>
          <p className="card-text">{props.obj.description}</p>
          <input type='button' value='View Details' className="btn btn-primary" onClick={()=>{viewDetails(props.obj.id)}}/>
        </div>
      </div>
    </div>
  )
}
