import styled from 'styled-components'

// prettier-ignore
// getBackgroundColor :: Props -> HexCode
const getBackgroundColor = ({ children: value }) =>
  value === 20 ? '#AB99B9'
  : value === 50 ? '#F0E0BC'
  : value === 100 ? '#BBD2E5'
  : value === 200 ? '#BFEEC9'
  : value === 500 ? '#F3C1B8'
  : /* otherwise */ '#E1CCCC'

// prettier-ignore
// getTextColor :: Props -> HexCode
const getTextColor = ({ children: value }) =>
  value === 20 ? '#59466E'
  : value === 50 ? '#D86337'
  : value === 100 ? '#426E9B'
  : value === 200 ? '#56a267'
  : value === 500 ? '#D04337'
  : /* otherwise */ '#BF8282'

const Bill = styled.div`
  user-select: none;
  background: ${getBackgroundColor};
  border-radius: 2px;
  text-align: center;
  height: 54px;
  width: 106px;
  line-height: 54px;
  font-size: 16px;
  font-weight: bold;
  color: ${getTextColor};
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
