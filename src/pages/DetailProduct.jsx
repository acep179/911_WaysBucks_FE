import { React } from 'react'
import { useParams } from 'react-router-dom'

import productsData from './../fakeData/productsData'
import topingData from '../fakeData/topingData'


function DetailProduct() {

  const { id } = useParams()
  console.log(id)
  const product = productsData.filter((item, index) => {
    return item.id === Number(id)
  })

  console.log(product)

  return (
    <div className='container d-flex justify-content-center'>
      <div className='row' style={{ marginTop: 90, width: '90%' }}>
        <img className='col-5' src={product[0]?.img} alt={product[0]?.name} />
        <div className='col-7 text-red'>
          <h1 >{product[0]?.name}</h1>
          <p>{product[0]?.price}</p>
          <form>
            <div>
              <h5>Toping</h5>
              <div className='row'>
                {topingData.map((item) => {
                  return (
                    <label className='toping-checkbox col-3 d-flex flex-column align-items-center text-center mt-4 mb-2' key={item.id}>
                      <input type="checkbox" name={item.name} id={`toping-${item.id}`} />
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
              <h5>{product[0]?.price}</h5>
            </div>
            <div className='d-grid gap-2'>
              <button className='btn btn-red d-grid gap-2'>Add Chart</button>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default DetailProduct