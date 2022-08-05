import React from 'react'

import { AddForm } from "./../components";

import kopi from './../assets/img/large_palm.jpg'

function AddProductAdmin() {
  return (
    <div className='container d-flex justify-content-center'>
      <div className='row justify-content-between' style={{ marginTop: 90, width: '90%' }}>
        <AddForm name='Product' />
        <img className='col-5' src={kopi} alt="Add Product" />
      </div>
    </div>
  )
}

export default AddProductAdmin