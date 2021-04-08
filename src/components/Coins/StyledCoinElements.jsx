import styled from 'styled-components'

// For Coins.js
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 150px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
`

export const CoinSearch = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 400px;
  @media screen and (max-width: 800px) {
    width: 60%;
  }
  @media screen and (max-width: 400px) {
    width: 80%;
  }
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
