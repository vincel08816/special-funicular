import styled, {css} from 'styled-components'

export const Td = styled.td`
  height: 90px;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    max-width: 130px;
    p {
      font-size: 14.5px;
    }
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
        width: 0;
        display: none;
      }
      `
    }
`

export const Logotd= styled(Td)`
  width: 60px;
`

export const Nametd = styled(Td)`
  width: 130px;
`

export const Pricetd = styled(Td)`
  width: 80px;
`

export const MarketCaptd = styled(Td)`
  width: 165px;

`

export const Volumetd = styled(Td)`
  width: 130px;
`

export const PriceChangetd = styled(Td)`
  width: 60px;
`

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 350px) {
    font-size: 10;
  }
`

export const NameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`

export const CoinData = styled.div`
  display: flex;
  text-align: right;
  @media screen and (max-width: 350px) {
    font-size: 10;
  }
`

export const CoinName = styled.h1`
  width: 130px;
  font-size: 16px;
  word-wrap: break-word;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 350px) {
    font-size: 10;
  }
`
export const CoinImg = styled.img`
  height: 30px;
  width: 30px;

  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
    height: 25px;
    width: 25px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    height: 20px;
    width: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const CoinSymbol = styled.p`
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    display: none;
  }
  ${({ mobile }) =>
  mobile && css`
    display: none;
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      display: grid;
      // padding: 15px 5px;
      // padding-top: 5px;
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