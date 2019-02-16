import styled from 'styled-components'

// prettier-ignore
// getBackgroundColor :: Props -> HexCode
const getBackgroundColor = ({ children: value }) =>
  value === 1 ? '#FFDDC5'
  : value === 2 ? '#FFECA2'
  : value === 5 ? '#FFDFA2'
  : /* otherwise */ '#fff1d8'

// prettier-ignore
// getTextColor :: Props -> HexCode
const getTextColor = ({ children: value }) =>
  value === 1 ? '#E29156'
  : value === 2 ? '#E7B906'
  : value === 5 ? '#E6A62C'
  : /* otherwise */ '#caac6d'

const Coin = styled.div`
  user-select: none;
  background: ${getBackgroundColor};
  background-image: linear-gradient(
    -20deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0)
  );
  border-radius: 50%;
  border: 1px dashed #ffe09f;
  text-align: center;
  height: 44px;
  width: 44px;
  line-height: 44px;
  font-size: 16px;
  font-weight: bold;
  color: ${getTextColor};
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
