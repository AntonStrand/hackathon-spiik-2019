import React from 'react'
import styled from 'styled-components'

import Coin from './money/Coin'
import CoinClickEffect from './money/sound-effects/coin-click.mp3'
import Bill from './money/Bill'
import BillClickEffect from './money/sound-effects/bill-click.mp3'

const denomination = sum => (sum > 10 ? Bill : Coin)
const sound = sum =>
  sum > 10 ? new Audio(BillClickEffect) : new Audio(CoinClickEffect)

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

const MoneyBox = ({ moneyList, onMoveMoney }) => (
  <Container>
    <CoinArea>
      {moneyList
        .sort((a, b) => a - b)
        .map(m => {
          const Denomination = denomination(m)
          return (
            <Denomination
              key={Math.random()}
              onClick={() => {
                sound(m).play()
                onMoveMoney(m)
              }}
            >
              {m}
            </Denomination>
          )
        })}
    </CoinArea>
  </Container>
)

export default MoneyBox
