import React from 'react'
import { Link } from 'react-router-dom'

import heroBg from './../assets/img/hero-bg.jpg'
import heroImg from './../assets/img/food.png'

import productsData from './../fakeData/productsData'

function Home() {
  return (
    <div className='container'>
      <header className='mb-5' style={{ marginTop: 90 }}>
        <div className='mx-auto position-relative' style={{ width: '90%' }}>
          <div className='hero row align-items-center' style={{ backgroundImage: `url(${heroBg})` }}>
            <div className='text-white col-7'>
              <h1>WAYSBUCKS</h1>
              <h5>Things are changing, bu we're still here for you</h5>
              <p>We have temporarily close our in-store cafes, but select grocery and drive thru location remaining open.</p>
              <p><strong>Waysbucks</strong> Drivers is also available</p>
              <p>Let's Order</p>
            </div>
            <img className='col-5 hero-img' src={heroImg} alt="Hero Food" />
          </div>
        </div>
      </header>
      <main className='mx-auto text-red' style={{ width: '92%' }}>
        <h4 className='mb-5'>Let's Order</h4>
        <div className='row'>
          {productsData.map((item) => {
            return (
              <div className='col-3 mb-5 px-3'>
                <div className='card bg-pink p-0'>
                  <img src={item.img} class="card-img-top w-100 mb-2" alt={item.name} />
                  <div class="card-body p-3">
                    <Link to={`/detail-product/${item.id}`}>
                      <h5 class="card-title mb-2 text-red">{item.name}</h5>
                    </Link>
                    <p class="card-text mb-2">{item.price}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div >
  )
}

export default Home