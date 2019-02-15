import React from 'react'
import styled from 'styled-components'
import MoneyBox from './MoneyBox'
import TitleAmountPair from './TitleAmountPair'

const Container = styled.span`
  width: 50%;
  margin: 1em;
`

const MoneyArea = ({ title, amount }) => (
  <Container>
    <h2>{title}</h2>
    <MoneyBox />
    <div>
      <TitleAmountPair title={title} amount={amount + ' kr'} />
    </div>
  </Container>
)

export default MoneyArea
