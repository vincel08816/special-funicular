import styled from 'styled-components'

// For Coins.js
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 150px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
  }
`
export const CoinSearch = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

export const SearchTitle = styled.h1`
  color: white;
  margin-bottom: 30px;
  text-align: center;
`

export const Searchbar = styled.form`
  margin-bottom: 32px;
  text-align: center;
`

export const SearchbarInput = styled.input`
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
`




