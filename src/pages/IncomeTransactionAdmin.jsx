import React from 'react'

import { AuthModal } from '../components'

import incomeTransactionData from './../fakeData/incomeTransactionData'


function IncomeTransactionAdmin() {
  return (
    <div className='container d-flex justify-content-center'>
      <AuthModal />
      <div style={{ marginTop: 90, width: '90%' }}>

        <h3 className='text-red mb-4'>Income Transaction</h3>

        <table className="table">
          <thead>
            <tr className='table-secondary'>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Post Code</th>
              <th>Income</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {incomeTransactionData.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.postCode}</td>
                  <td className='text-primary'>{item.income}</td>
                  <td className={`text-${item.status === 'Waiting Approve' ? 'warning' :
                    item.status === 'Success' ? 'success' :
                      item.status === 'Cancel' ? 'danger' : 'info'
                    }`}>
                    {item.status}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default IncomeTransactionAdmin