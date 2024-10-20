import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Product = (props) => {
  const navTo =useNavigate()

  const viewDetails=(id)=>{
    navTo(`/products/${id}`)
  }

  return (
    <div className='col-md-6 col-lg-4 col-xl-3 p-3 '>
      <div className="card p-1"  >
        <img src={props.obj.images[0]} className="card-img-top"  alt={props.obj.title}/>
        <div className="card-body text-center" >
          <h5 className="card-title text-start"  style={{height:'50px'}}>{props.obj.title}</h5>
          <p className="card-text text-start" style={{height:'120px'}}>{props.obj.description.slice(0,150)} ...</p>
          <input type='button' value='View Details' className="btn btn-primary mb-2 m-auto" 
                                    onClick={()=>{viewDetails(props.obj.id)}}/>
        </div>
      </div> 
    </div>
  )
}
