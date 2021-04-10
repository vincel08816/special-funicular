import React from 'react';
import {
  Td,
  Nametd,
  Symboltd,
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
        <Symboltd>
          <Div>
            <CoinImg src={image} alt='crypto' />
            <CoinSymbol mobile>{symbol}</CoinSymbol>
          </Div>
        </Symboltd>
        <Nametd hide><CoinName>{coin.name}</CoinName><CoinSymbol>({symbol})</CoinSymbol></Nametd>
        <Pricetd><p>${price.toString().substring(0, 6)}</p></Pricetd>
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