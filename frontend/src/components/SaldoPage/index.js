import React, { useState } from 'react'
import MoneyArea from './MoneyArea'
import styled from 'styled-components'
import Button from '../form/Button'

import convertAmountToMoney from './model/amountConverter'

const BoxContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  height: 90vh;
`

const removeFrom = (xs, item) => {
  const idx = xs.indexOf(item)
  return idx >= 0 ? [...xs.slice(0, idx), ...xs.slice(idx + 1)] : xs
}

const SaldoPage = () => {
  const [money, setMoney] = useState(convertAmountToMoney(2000))
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
          title="Dina pengar"
          moneyList={money}
          onMoveMoney={moveMoney(false)}
        />
        <MoneyArea
          title="Pengar att spendera"
          moneyList={register}
          onMoveMoney={moveMoney(true)}
        />
      </BoxContainer>
      <Button>KÖP</Button>
    </div>
  )
}

export default SaldoPage
