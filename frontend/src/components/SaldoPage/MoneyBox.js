import React from 'react'
import styled from 'styled-components'

import Coin from './money/Coin'
// import Bill from './money/Bill'

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

const MoneyBox = ({ amount, onMoveMoney }) => (
  <Container>
    <CoinArea>
      { Array(amount).fill(1).map(() => <Coin key={Math.random()} onClick={() => onMoveMoney(1)}>1</Coin>) }
    </CoinArea>
  </Container>
)

export default MoneyBox
