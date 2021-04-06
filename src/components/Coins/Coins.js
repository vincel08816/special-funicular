import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import { Container, CoinSearch, SearchTitle, Searchbar, SearchbarInput } from './StyledCoinElements'
import styled, { css } from 'styled-components'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import Portal from '../Portal/Portal'
import CoinModal from '../CoinModal/CoinModal'


const load = async(setCoins, page) => {
  axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`)
  .then(res => { setCoins(res.data) })
  .catch(error => console.log(error));  
};

const Coins = () => {
  const [minutes, setMinutes] = useState(0);
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false)
  const [coinid, setCoinid] = useState('');

  useEffect(() => {
    load(setCoins, page)
    console.log("useEffect 1")
  }, [page])

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(minutes => minutes + 1);
      load(setCoins, page)
      console.log("useEffect 2")
    }, 60000);
    return () => clearInterval(interval);
  }, [page]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin => (
      coin.name.toLowerCase().includes(search.toLowerCase()) + coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
  );
  
  return (
    <Container>
      <Portal id="modal-root">
        <CoinModal open={open} setOpen={setOpen} coinid={coinid}/>
      </Portal>
      <CoinSearch>
        <Searchbar>
          <SearchbarInput
            type='text'
            onChange={handleChange}
            placeholder='Search for a symbol or ticker'
          />
        </Searchbar>
        <PageSection>
          <Button onClick={() => setPage(page > 1 ? page - 1 : page)}><BsChevronDoubleLeft /></Button>
          <PageDiv>Page {page}</PageDiv>
          <Button onClick={() => setPage(page + 1)}><BsChevronDoubleRight /></Button>
        </PageSection>
      </CoinSearch>
      <TableDiv>
      <Table>
        <tr>
          <Th>Coin</Th>
          <Th symbol>Symbol</Th>
          <Th>Price</Th>
          <Th>Market Cap</Th>
          <Th>24h %</Th>
          <Th detail>24-H Volume</Th>
        </tr>
        {coins ? filteredCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
              coin={coin}
              setOpen={setOpen}
              setCoinid={setCoinid}
            />
          );
        }): null}
      </Table>
      </TableDiv>
    </Container>
  )
}

const Button = styled.button`
  display: block;
  height: 100%;
  border: none;
  width: 60px;
  color: white;
  background: none;
  cursor: pointer;
`

const TableDiv = styled.div`oooooooo
  display: flex;
`
const Table = styled.table`
  color: white;
  border-collapse: collapse;
  justify-content: center;
  width: 80%;
`

const Th = styled.th`
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

const PageSection = styled.section`
  display: flex;
  background: black;
  color: white;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  margin-bottom: 30px;
  // opacity: 0.6;
`


const PageDiv = styled.div`
  padding-top: 5px;
`

export default Coins
