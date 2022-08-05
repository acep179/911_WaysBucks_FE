import React from 'react'

import clip from './../assets/img/clip.png'

function AddForm(props) {
  return (
    <div className='col-6'>
      <h2 className='text-red mb-5'>{props.name}</h2>
      <form>
        <input className="form-control input-red mb-4" type="text" name='name' placeholder={`Name ${props.name}`} aria-label="default input example" />
        <input className="form-control input-red mb-4" type="number" name='price' placeholder="Price" aria-label="default input example" />
        <div className="input-group mb-5">
          <input type="file" className="form-control input-file-red" id="inputGroupFile02" />
          <label className="input-group-text label-file" htmlFor="inputGroupFile02"><img style={{ height: 20 }} src={clip} alt="clip" /></label>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-red mx-auto" style={{ width: '90%' }} type="button">Add {props.name}</button>
        </div>
      </form>
    </div>
  )
}

export default AddForm