import React from 'react'

export const Loading = () => {
  return (
    <div className='myDiv d-flex justify-content-center align-items-center'>
          <div className="spinner-grow text-danger " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
  )
}
