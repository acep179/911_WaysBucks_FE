import React from 'react'
import { TransactionCard } from '../components'

import transactionData from './../fakeData/transactionData'

import userData from './../fakeData/userData'

function Profile() {
  return (
    <div className='container d-flex justify-content-center'>
      <div className='row' style={{ marginTop: 90, width: '90%' }}>
        <div className='col-5'>
          <h3 className='text-red mb-4'>My Profile</h3>
          <div className='d-flex'>
            <img src={userData[0].photo} alt={userData[0].name} />
            <div className='ms-4'>
              <h5 className='mb-2 text-brown'>Full Name</h5>
              <p>{userData[0].name}</p>
              <h5 className='text-brown'>Email</h5>
              <p>{userData[0].email}</p>
            </div>
          </div>
        </div>

        <div className='col-7'>
          <h3 className='text-brown mb-4'>My Transaction</h3>
          {transactionData.map((item) => {
            return <TransactionCard
              id={item.id}
              day={item.day}
              date={item.date}
              status={item.status}
              subTotal={item.subTotal}
              product={item.product}
            />
          })}

        </div>

      </div>
    </div>
  )
}

export default Profile