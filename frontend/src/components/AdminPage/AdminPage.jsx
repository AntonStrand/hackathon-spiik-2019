import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { useState } from 'react'
import Row from './Row.jsx'

const saveMoney = (id, saldo) => 
  fetch(`/api/child/${id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hZGRpcyIsImlkIjoiNWM2NzYwNzQxZTllNzQwNzY3YjI3YTYxIiwiaWF0IjoxNTUwMzIyNTk3LCJleHAiOjE1NTAzMjk3OTd9.YbSAXpv7EIDYe1hSEaxHz_1TmrA03dBpLTvdTAgQRiI'
      },
      body: JSON.stringify({ saldo: saldo})
    }).catch(e => console.log(e))

const initialData = JSON.parse(`[{"_id":"5c67df1ed3df0b4a3c91580b","name":"Elliot","parentID":"5c6760741e9e740767b27a61","saldo":200,"date":"2019-02-16T09:59:58.023Z","__v":0},{"_id":"5c67e060986e4843848a1459","name":"Colette","parentID":"5c6760741e9e740767b27a61","saldo":0,"date":"2019-02-16T10:05:20.016Z","__v":0}]`)

const AdminPage = props => {
  const [data, setData] = useState(initialData)

  const handleUpdateSaldo = (id, saldo) => {
    if (!isNaN(parseInt(saldo, 10))) {
      const child = data.find(d => d._id === id)
      child.saldo = saldo

      saveMoney(child._id, child.saldo)
        .then(result => {
          console.log(result)
          setData([...data])
        })
    }
  }

  return (
    <div>
      <h1>AdminPage</h1>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        { data.map(d => <Row child={d} onUpdateSaldo={handleUpdateSaldo} history={props.history}  />) }
      </div>
    </div>
  )
}

export default withRouter(AdminPage)
