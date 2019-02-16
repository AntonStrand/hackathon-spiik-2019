import React from 'react'
import styled from 'styled-components'
import MoneyBox from './MoneyBox'
import TitleAmountPair from './TitleAmountPair'
import { sum } from './model/amountConverter'

const Container = styled.span`
  width: 50%;
  margin: 1em;
`

const MoneyArea = ({ title, moneyList, onMoveMoney }) => (
  <Container>
    <h2>{title}</h2>
    <MoneyBox moneyList={moneyList} onMoveMoney={onMoveMoney} />
    <div>
      <TitleAmountPair title={title} amount={sum(moneyList) + ' kr'} />
    </div>
  </Container>
)

export default MoneyArea
