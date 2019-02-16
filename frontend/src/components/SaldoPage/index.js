import React from 'react'
import MoneyArea from './MoneyArea'
import styled from 'styled-components'
import Button from '../form/Button'

const BoxContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  height: 90vh;
`

const SaldoPage = ({ shopItems }) => (
  <div>
    <BoxContainer>
      <MoneyArea title="Dina pengar" amount="20" />
      <MoneyArea title="Pengar att spendera" amount="10" />
    </BoxContainer>
    <Button>KÖP</Button>
  </div>
)

export default SaldoPage
