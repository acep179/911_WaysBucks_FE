import React from 'react'

import toping from './../assets/img/kiwi-popping-pearl.png'

import { AddForm, Navbar } from './../components'

function AddTopingAdmin() {
  return (
    <div className='container d-flex justify-content-center'>
      <Navbar />
      <div className='row justify-content-between' style={{ marginTop: 90, width: '90%' }}>
        <AddForm name='Toping' />
        <img className='col-5' src={toping} alt="Add Product" />
      </div>
    </div>
  )
}

export default AddTopingAdmin