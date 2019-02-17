import * as React from 'react'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Row = ({ child, onUpdateSaldo, history }) => {
  const [amount, setAmount] = useState()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '28px',
        justifyContent: 'space-around'
      }}
    >
      <div style={{ paddingRight: '20px', fontSize: '1.5em' }}>
        {child.name}
      </div>
      <div style={{ fontSize: '1.5em' }}>{child.saldo}</div>
      <div>
        <TextField
          onChange={e => setAmount(e.target.value)}
          placeholder="Summa"
          style={{ width: '80px' }}
        />
      </div>
      <div>
        <Button
          onClick={() => {
            console.log(child._id)
            onUpdateSaldo(child._id, parseInt(amount, 10))
          }}
          variant="contained"
        >
          Uppdatera saldo
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() =>
            history.push({
              pathname: '/wallet',
              state: {
                childId: child._id,
                name: child.name,
                amount: child.saldo
              }
            })
          }
        >
          Gå till plånboken
        </Button>
      </div>
    </div>
  )
}

export default Row
