import React from 'react'
import styled from 'styled-components'
import convertAmountToMoney from './model/amountConverter'

import Coin from './money/Coin'
import Bill from './money/Bill'

const denomination = sum => (sum > 10 ? Bill : Coin)

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

const MoneyBox = ({ amount, onMoveMoney }) => {
  const money = convertAmountToMoney(amount)
  return (
    <Container>
      <CoinArea>
        {money
          .sort((a, b) => a - b)
          .map(m => {
            const Denomination = denomination(m)
            return (
              <Denomination key={Math.random()} onClick={() => onMoveMoney(m)}>
                {m}
              </Denomination>
            )
          })}
      </CoinArea>
    </Container>
  )
}

export default MoneyBox
