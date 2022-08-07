import { React, useState } from 'react'
import { useParams } from 'react-router-dom'

import productsData from './../fakeData/productsData'
import topingData from '../fakeData/topingData'
import { Navbar } from '../components'


const topingPrice = [0, 0, 0, 0, 0, 0, 0, 0]
function DetailProduct() {

  const { id } = useParams()

  const product = productsData.filter((item, index) => {
    return item.id === Number(id)
  })

  let [cart, setCart] = useState(0)
  let [price, setPrice] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  let [totalPrice, setTotalPrice] = useState(product[0].price)

  const handleOnChange = (e) => {

    if (e.target.checked) {
      setPrice(price.splice(e.target.id - 1, 1, Number(e.target.value)))
    } else {
      setPrice(price.splice(e.target.id - 1, 1, 0))
    }

    setPrice(topingPrice)
    setTotalPrice(total(price))
  }

  const total = (array) => {
    let sum = 0;

    array.forEach(item => {
      sum += item;
    });

    sum += product[0].price
    return sum;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCart(cart++)
  }


  return (
    <div>
      <Navbar cartNum={cart} />
      <div className='container d-flex justify-content-center'>
        <div className='row' style={{ marginTop: 90, width: '90%' }}>
          <img className='col-5' src={product[0]?.img} alt={product[0]?.name} />
          <div className='col-7 text-red'>
            <h1 >{product[0]?.name}</h1>
            <p>{product[0]?.price}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div>
                <h5>Toping</h5>
                <div className='row'>
                  {topingData.map((item) => {
                    return (
                      <label className='toping-checkbox col-3 d-flex flex-column align-items-center text-center mt-4 mb-2' key={item.id}>
                        <input type="checkbox" name={item.name} id={item.id} onChange={handleOnChange} value={item.price} />
                        <img className='mb-2' src={item.img} alt={item.name} width={75} />
                        <p>{item.name}
                        </p>
                        <span className='checkmark'></span>
                      </label>
                    )
                  })}
                </div>
              </div>
              <div className='d-flex justify-content-between'>
                <h5>Total</h5>
                <h5>{totalPrice}</h5>
              </div>
              <div className='d-grid gap-2'>
                <button className='btn btn-red d-grid gap-2'>Add Cart</button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </div>
  )
}

export default DetailProduct