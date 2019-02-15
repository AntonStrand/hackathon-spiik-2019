import React from 'react'
import styled from 'styled-components'

import Coin from './money/Coin'
import Bill from './money/Bill'

const Container = styled.div`
  background: #eee;
  box-shadow: inset 0 0.5em 0.5em 0 #ddd;
  width: 100%;
  height: 50vh;
  border-radius: 0.5em;
  overflow: scroll;
`
const CoinArea = styled.div`
  padding: 0.5em;
  text-align: left;
`

const MoneyBox = ({ amount }) => (
  <Container>
    <CoinArea>
      <Coin>1</Coin>
      <Coin>1</Coin>
      <Coin>1</Coin>
      <Coin>1</Coin>
      <Coin>1</Coin>
      <Coin>1</Coin>
      <Coin>1</Coin>
      <Coin>1</Coin>
      <Coin>5</Coin>
      <Coin>5</Coin>
      <Coin>5</Coin>
      <Coin>5</Coin>
      <Coin>10</Coin>
      <Coin>10</Coin>
      <Coin>10</Coin>
      <Coin>10</Coin>
      <Bill>20</Bill>
      <Bill>20</Bill>
      <Bill>20</Bill>
      <Bill>20</Bill>
      <Bill>20</Bill>
      <Bill>50</Bill>
      <Bill>50</Bill>
      <Bill>100</Bill>
      <Bill>200</Bill>
    </CoinArea>
  </Container>
)

export default MoneyBox
