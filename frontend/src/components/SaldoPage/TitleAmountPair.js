import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1em;
`
const Title = styled.span`
  float: left;
`
const Amount = styled.span`
  float: right;
`

const TitleAmountPair = ({ title, amount }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Amount>{amount}</Amount>
  </Wrapper>
)

export default TitleAmountPair
