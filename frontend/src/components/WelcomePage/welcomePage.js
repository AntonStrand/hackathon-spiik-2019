import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core/'

const Wrapper = styled.div`
  padding: 1rem;
  font-size: 1.5em;
`

const WelcomeMessage = () => (
  <Wrapper>
    <Typography component="h2" variant="h1" gutterBottom>
        Välkommen till Digitala plånboken!
    </Typography>
  </Wrapper>
)

export default WelcomeMessage
