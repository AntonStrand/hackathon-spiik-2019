import styled from 'styled-components'

const Coin = styled.div`
  user-select: none;
  background: #fff1d8;
  border-radius: 50%;
  border: 1px dashed #ffe09f;
  text-align: center;
  height: 44px;
  width: 44px;
  line-height: 44px;
  font-size: 16px;
  font-weight: bold;
  color: #caac6d;
  box-shadow: 0 2px 0 0, 0 2px 3px #444;
  cursor: pointer;
  transition: all 100ms;
  margin: 0.5em;
  display: inline-block;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 0 0, 0 2px 6px -2px #aaa;
  }

  &:active {
    transform: scale(0.9);
  }
`

export default Coin
