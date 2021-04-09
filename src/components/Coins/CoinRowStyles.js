import styled, {css} from 'styled-components'

export const Td = styled.td`
  height: 90px;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid;
  cursor: pointer;
  // @media screen and (min-width: 769px) {
  //   padding: 25px 10px;
  // }
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

export const Symboltd= styled(Td)`
  width: 60px;
  max-width: 60px;
`

export const Nametd = styled(Td)`
  width: 110px;
  // max-width: 120px;
  // min-width: 120px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const Pricetd = styled(Td)`
    width: 110px;
    max-width: 110px;
    min-width: 110px;
`

export const MarketCaptd = styled(Td)`
  width: 165px;
  max-width: 165px;
  min-width: 165px;
`

export const Volumetd = styled(Td)`
    width: 130px;
    max-width: 130px;
    min-width: 130px;
`

export const PriceChangetd = styled(Td)`
    width: 80px;
`

export const Div = styled.div`
  color: white;
  background: none;
  border: none;
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

export const CoinData = styled.div`
  display: flex;
  text-align: right;
  @media screen and (max-width: 350px) {
    font-size: 10;
  }
`

export const CoinName = styled.h1`
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