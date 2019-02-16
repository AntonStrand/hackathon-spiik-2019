import React, { useState } from 'react'
import MoneyArea from './MoneyArea'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'

import convertAmountToMoney from './model/amountConverter'
import saveToWallet from './model/saveToWallet'

const BoxContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  height: 80vh;
`

const removeFrom = (xs, item) => {
  const idx = xs.indexOf(item)
  return idx >= 0 ? [...xs.slice(0, idx), ...xs.slice(idx + 1)] : xs
}

const addGenetive = name => (name[name.length - 1] === 's' ? name : name + 's')

const SaldoPage = ({ childID, name, amount, history }) => {
  const [money, setMoney] = useState(convertAmountToMoney(amount))
  const [register, setRegister] = useState([])
  const moveMoney = moveFromRegister => amount => {
    if (moveFromRegister) {
      setMoney([...money, amount])
      setRegister(removeFrom(register, amount))
    } else {
      setMoney(removeFrom(money, amount))
      setRegister([...register, amount])
    }
  }
  return (
    <div>
      <BoxContainer>
        <MoneyArea
          title={`${addGenetive(name)} pengar`}
          moneyList={money}
          onMoveMoney={moveMoney(false)}
        />
        <MoneyArea
          title="Pengar att spendera"
          moneyList={register}
          onMoveMoney={moveMoney(true)}
        />
      </BoxContainer>
      <Button
        style={{ marginRight: '1em' }}
        onClick={() => history.push('/admin')}
      >
        AVBRYT
      </Button>
      <Button
        disabled={!register.length}
        variant="contained"
        color="primary"
        style={{ fontSize: '1.2em' }}
        onClick={() =>
          saveToWallet(childID, amount).fork(
            () => history.push('/login'), // If error redirect to login
            () => history.push('/admin') // else redirect to admin page
          )
        }
      >
        GENOMFÖR TRANSAKTION
      </Button>
    </div>
  )
}

export default withRouter(SaldoPage)
