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
      {coin ? <tr onClick={() => handleClick()}>
        <Td>
          <Div>
            <CoinImg src={image} alt='crypto' />
            <CoinSymbol>{symbol}</CoinSymbol>
          </Div>
        </Td>
        {/* <Td symbol><CoinSymbol>{symbol}</CoinSymbol></Td> */}
        <Td>${price}</Td>
        <Td>${volume !== null? volume.toLocaleString(): null}</Td>
        <Td>
          {priceChange !== null ? 
            (priceChange < 0 ? <Red>{priceChange.toFixed(2)}%</Red>:<Green>{priceChange.toFixed(2)}%</Green>) :
            null
          }
        </Td>
        <Td hide>{marketcap ? <>${marketcap.toLocaleString()}</> : null}</Td>
      </tr> : null}
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
  @media screen and (max-width: 350px) {
    font-size: 10;
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
  flex-direction: left;
  align-items: center;
  justify-content: left;
  @media screen and (max-width: 900px) {
    padding-top: 10px;
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 350px) {
    font-size: 10;
  }
`

export const CoinData = styled.div`
  display: flex;
  text-align: right;
  @media screen and (max-width: 350px) {
    font-size: 10;
  }
`

export const CoinName = styled.h1`
  font-size: 16px;
  margin-left: 8px;
  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 350px) {
    font-size: 10;
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
  @media screen and (max-width: 350px) {
    font-size: 10;
  }
`

export const CoinSymbol = styled.p`
  text-transform: uppercase;
  @media screen and (min-width: 900px) {
    padding-left: 10px;
  }
  ${({ mobile }) =>
  mobile && css`
    display: none;
    @media screen and (max-width: 900px) {
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