import styled from 'styled-components'

const Bill = styled.div`
  user-select: none;
  background: #bfeec9;
  border-radius: 2px;
  border: 1px solid #a1dbae;
  text-align: center;
  height: 54px;
  width: 106px;
  line-height: 54px;
  font-size: 16px;
  font-weight: bold;
  color: #56a267;
  box-shadow: 0 1px 1px #999;
  cursor: pointer;
  transition: all 100ms;
  margin: 0.5em;
  display: inline-block;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 6px -4px #aaa;
  }

  &:active {
    transform: scale(0.98);
  }
`

export default Bill
