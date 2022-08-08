import React from 'react'

import clip from './../assets/img/clip.png'

function AddForm(props) {
  return (
    <div className='row justify-content-between' style={{ marginTop: 90, width: '90%' }}>
      <div className='col-6'>
        <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content thanks-message">

              <div class="modal-body">
                <p>Add {props.name} Success</p>
              </div>

            </div>
          </div>
        </div>
        <h2 className='text-red mb-5'>{props.name}</h2>
        <form>
          <input className="form-control input-red mb-4" type="text" name='name' placeholder={`Name ${props.name}`} aria-label="default input example" />
          <input className="form-control input-red mb-4" type="number" name='price' placeholder="Price" aria-label="default input example" />
          <div className="mb-5">
            <input type="file" className="form-control input-file-red" id="inputGroupFile02" />
            <label className="form-control label-file" htmlFor="inputGroupFile02">
              <p className='m-0'> Photo {props.name}</p>
              <img style={{ height: 20 }} src={clip} alt="clip" />
            </label>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-red mx-auto" style={{ width: '90%' }} type="button" data-bs-toggle="modal" data-bs-target="#successModal">Add {props.name}</button>
          </div>
        </form>
      </div>
      <img className='col-5' src={props.img} alt="Add Product" />
    </div >
  )
}

export default AddForm