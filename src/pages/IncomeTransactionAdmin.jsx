import React from 'react'

import incomeTransactionData from './../fakeData/incomeTransactionData'

const statusTd = (status) => {
  if (status === "Waiting Approve") {
    return (<td className='text-warning'>{status}</td>)
  } else if (status === "Success") {
    return (<td className='text-success'>{status}</td>)
  } else if (status === "Cancel") {
    return (<td className='text-danger'>{status}</td>)
  } else if (status === "On The Way") {
    return (<td className='text-info'>{status}</td>)
  }
}

let incomeTransaction = incomeTransactionData.map((item) => {
  return {
    ...item,
    status: statusTd(item.status)
  }
})




console.log(incomeTransaction)

function IncomeTransactionAdmin() {
  return (
    <div className='container d-flex justify-content-center'>
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
            {incomeTransaction.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.postCode}</td>
                  <td className='text-primary'>{item.income}</td>
                  {item.status}
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