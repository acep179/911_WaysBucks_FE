import React from 'react'

import transactionData from './../fakeData/transactionData'

import bin from './../assets/img/bin.png'
import { Navbar } from '../components'

function Cart() {
  return (
    <div className='container d-flex justify-content-center'>
      <Navbar />
      <div className='text-red' style={{ marginTop: 90, width: '90%' }}>

        <div class="modal fade" id="thanksModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content thanks-message">

              <div class="modal-body">
                <p>Thank you for ordering in us, please wait to verify your order</p>
              </div>

            </div>
          </div>
        </div>



        <h3 >My Cart</h3>
        <div className='row justify-content-between'>
          <p>Review Your Order</p>
          <div className='col-7 '>
            {transactionData.map((item) => {
              return (

                <div className='cart row h-50 pt-3 mb-4'>

                  {item.product.map((product) => {
                    return (

                      <div className='d-flex justify-content-between mb-3'>
                        <div className='cart-image col-2' style={{ backgroundImage: `url(${product.img})` }}>
                        </div>
                        <div className='col-8 d-flex flex-column justify-content-evenly align-items-start'>
                          <p className='m-0'>{product.name}</p>
                          <p className='m-0'>Toping:
                            {product.toping.map((toping) => {
                              return `${toping.name}, `
                            })}
                          </p>
                        </div>
                        <div className='col-2 text-end d-flex flex-column justify-content-evenly align-items-end'>
                          <p className='m-0'>{product.price}</p>
                          <img className='cursor-pointer' src={bin} alt='erase' style={{ height: 20 }} />
                        </div>
                      </div>

                    )
                  })}

                </div>

              )
            })}
          </div>
          <div className='col-4 h-50'>
            <div >
              <div className='cart d-flex justify-content-between pt-2 mb-3'>
                <div className='d-flex flex-column'>
                  <p className='mb-2'>Subtotal</p>
                  <p className='mb-2'>Qty</p>
                </div>

                <div className='d-flex flex-column'>
                  <p className='mb-2'>69.000</p>
                  <p className='mb-2'>2</p>
                </div>
              </div>

              <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p>69.000</p>
              </div>

            </div>

            <div class="d-grid gap-2 mt-5">
              <button class="btn btn-red" type="button" data-bs-toggle="modal" data-bs-target="#thanksModal">Pay</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart