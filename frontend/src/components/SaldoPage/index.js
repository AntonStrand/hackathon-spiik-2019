import React, { useState } from 'react'
import MoneyArea from './MoneyArea'
import styled from 'styled-components'
import Button from '../form/Button'

const BoxContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  height: 90vh;
`

const SaldoPage = ({ shopItems }) => {
  const [money, setMoney] = useState(2000)
  const [register, setRegister] = useState(10)
  const moveMoney = moveFromRegister => amount => {
    if (moveFromRegister) {
      amount = amount * -1
    }
    setMoney(money - amount)
    setRegister(register + amount)
  }
  return (<div>
    <BoxContainer>
      <MoneyArea title="Dina pengar" amount={money} onMoveMoney={moveMoney(false)} />
      <MoneyArea title="Pengar att spendera" amount={register} onMoveMoney={moveMoney(true)}/>
    </BoxContainer>
    <Button>KÖP</Button>
  </div>)
}

export default SaldoPage
