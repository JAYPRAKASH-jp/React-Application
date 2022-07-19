import React from 'react'
import loading from '../74H8.gif'

export default function Spinner(){
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt="loading" />
      </div>
    )
}
