import React from 'react'

import { AddForm, Navbar } from "./../components";

import kopi from './../assets/img/large_palm.jpg'

function AddProductAdmin() {
  return (
    <div className='container d-flex justify-content-center'>
      <Navbar />

      <AddForm name='Product' img={kopi} />

    </div>
  )
}

export default AddProductAdmin