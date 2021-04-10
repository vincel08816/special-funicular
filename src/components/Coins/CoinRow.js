import React from 'react';
import {
  NameDiv,
  Nametd,
  Logotd,
  MarketCaptd,
  Pricetd,
  Div,
  Volumetd,
  PriceChangetd,
  CoinName,
  CoinImg,
  CoinSymbol,
  Red,
  Green
} from './CoinRowStyles'

const CoinRow = ({
  coin,
  setOpen,
  setCoinid
}) => {
  const {
    id,
    total_volume: marketcap,
    current_price: price,
    symbol,
    market_cap: marketCap,
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
        <Logotd>
          <Div>
            <CoinImg src={image} alt='crypto' />
            <CoinSymbol mobile>{symbol}</CoinSymbol>
          </Div>
        </Logotd>
        <Nametd hide><NameDiv><CoinName>{coin.name}</CoinName><CoinSymbol>({symbol})</CoinSymbol></NameDiv></Nametd>
        <Pricetd><p>${price.toString().substring(0, 7)}</p></Pricetd>
        <MarketCaptd>{marketCap !== undefined? <p>${marketCap.toLocaleString()}</p>: null}</MarketCaptd>
        <PriceChangetd>
          {priceChange !== null ? 
            (priceChange < 0 ? <Red>{priceChange.toFixed(2)}%</Red>:<Green>+{priceChange.toFixed(2)}%</Green>) :
            null
          }
        </PriceChangetd>
        <Volumetd hide>{marketcap ? <>${marketcap.toLocaleString()}</> : null}</Volumetd>
      </tr> : null}
    </>
  );
};

export default CoinRow;