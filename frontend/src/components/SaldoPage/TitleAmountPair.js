import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1rem;
  font-size: 1.5em;
`
const Title = styled.span`
  float: left;
  color: #565656;
`
const Amount = styled.span`
  float: right;
  font-weight: bold;
`

const TitleAmountPair = ({ title, amount }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Amount>{amount}</Amount>
  </Wrapper>
)

export default TitleAmountPair
