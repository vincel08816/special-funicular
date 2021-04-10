import styled, {css} from 'styled-components'

// For Coins.js
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 150px;
  flex-direction: column;
  // width: 80vw;
  max-width: 100vw;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
`

export const CoinSearch = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  // @media screen and (max-width: 800px) {
  //   width: 60%;
  // }
  // @media screen and (max-width: 400px) {
  //   width: 80%;
  // }
`

export const Searchbar = styled.form`
  margin-bottom: 32px;
  text-align: center;
`

export const SearchbarInput = styled.input`
  padding-left: 16px;
  height: 50px;
  border-radius: 4px;
  width: 100%;
`

export const Button = styled.button`
  display: block;
  height: 100%;
  border: none;
  width: 45px;
  color: white;
  background: none;
  cursor: pointer;
`
export const ButtonDiv = styled.div`
  display: flex;
  height: 100%;
`

export const TableDiv = styled.div`
  display: flex;
`
export const Table = styled.table`
  color: white;
  border-collapse: collapse;
  max-width 90vw;
  table-layout: fixed
  word-wrap:break-word;
  cellspacing: 0; 
  cellpadding: 0;
`

export const Th = styled.th`
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: 2px solid;
  ${({ symbol }) =>
    symbol && css`
    @media screen and (max-width: 900px) {
      display: none;
    }
    `
  }
  ${({ detail }) =>
    detail && css`
    @media screen and (max-width: 768px) {
      display: none;
    }
    `
  }
`

export const PageSection = styled.section`
  display: flex;
  background: black;
  color: white;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  margin-bottom: 30px;
`


export const PageDiv = styled.div`
  padding-top: 5px;
`

export const Logoth = styled(Th)`
  width: 60px;
`

export const Nameth = styled(Th)`
  width: 130px;
`

export const Priceth = styled(Th)`
  width: 80px;
`

export const MarketCapth = styled(Th)`
  width: 165px;
`

export const Volumeth = styled(Th)`
  width: 130px;
`

export const PriceChangeth = styled(Th)`
  width: 80px;
`