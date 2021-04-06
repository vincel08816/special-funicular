import React from 'react';
import styled, {css} from 'styled-components'

const Coin = ({
  coin,
  setOpen,
  setCoinid
}) => {
  const {
    id,
    total_volume: marketcap,
    name,
    current_price: price,
    symbol,
    market_cap: volume,
    image,
    price_change_percentage_24h: priceChange,
  } = coin;
  const handleClick = () => {
    setCoinid(id)
    setOpen(true)
  }
  return (
    <>
      <tr onClick={() => handleClick()}>
        <Td>
          <Div>
            <CoinImg src={image} alt='crypto' />
            <CoinName>{name}</CoinName>
            <CoinSymbol mobile>{symbol}</CoinSymbol>
          </Div>
        </Td>
        <Td symbol><CoinSymbol>{symbol}</CoinSymbol></Td>
        <Td>${price}</Td>
        <Td>${volume.toLocaleString()}</Td>
        <Td>{priceChange < 0 ? <Red>{priceChange.toFixed(2)}%</Red>:<Green>{priceChange.toFixed(2)}%</Green>}</Td>
        <Td hide>${marketcap.toLocaleString()}</Td>
      </tr>
    </>
  );
};

const Td = styled.td`
  text-align: center;
  align-items: center;
  padding: 25px 10px;
  border-bottom: 1px solid;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    border-bottom: none;
    padding: 0px 15px;
    align-items: space-around;
  }
  @media screen and (max-width: 500px) {
    padding: 7px 2px;
  }
  ${({ symbol }) =>
  symbol && css`
    @media screen and (max-width: 900px) {
      display: none;
    }
    `
  }
  ${({ hide }) =>
    hide && css`
      @media screen and (max-width: 768px) {
        display: none;
      }
      `
    }
`

const Div = styled.div`
  color: white;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: left;
  @media screen and (max-width: 900px) {
    padding-top: 10px;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

export const CoinData = styled.div`
  display: flex;
  text-align: right;
`

export const CoinName = styled.h1`
  font-size: 16px;
  margin-left: 8px;
  // text-align: left;
  @media screen and (max-width: 900px) {
    display: none;
  }
`
export const CoinImg = styled.img`
  height: 30px;
  width: 30px;

  @media screen and (max-width: 900px) {
    height: 25px;
    width: 25px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  // @media screen and (max-width: 600px) {
  //   height: 15px;
  //   width: 15px;
  // }
`

export const CoinSymbol = styled.p`
  text-transform: uppercase;

  ${({ mobile }) =>
  mobile && css`
    display: none;
    @media screen and (max-width: 900px) {
      display: inline;
      font-size: 13px;
      padding: 15px 5px;
    }
  `
  }
`
export const Red = styled.p`
  color: #FF6961;
`

export const Green = styled.p`
  color: 	#00FF00;
`

export default Coin;