import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import { Container, CoinSearch, Searchbar, SearchbarInput } from './StyledCoinElements'
import styled, { css } from 'styled-components'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import Portal from '../Portal/Portal'
import CoinModal from '../CoinModal/CoinModal'

const load = async (coins, setCoins, setFilteredCoins) => {
  let tempData = []
  let one = axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
  let two = axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=false`)
  let three = axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=3&sparkline=false`)
  let four = axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=4&sparkline=false`)

  axios.all([one,two, three, four]).then(axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    const responseThree = responses[2]
    const responseFour = responses[3]

    tempData.push(...responseOne.data, ...responseTwo.data, ...responseThree.data, ...responseFour.data)
    for(let i = 0; i < tempData.length; i++){
      tempData.filter(x => x.id === tempData[0].id)
    }
    setCoins(tempData)
    if (!coins) setFilteredCoins(tempData)
  })).catch(errors => {
    console.log(errors)
  })
};

const Coins = () => {
  const [minutes, setMinutes] = useState(0);
  const [coins, setCoins] = useState();
  const [page, setPage] = useState(1);
  const [display, setDisplay] = useState([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false)
  const [coinid, setCoinid] = useState('');
  const [filteredCoins, setFilteredCoins] = useState([])

  console.log("coins.length", coins ? coins.length: null)
  useEffect(() => {
    const displayCoins = () => {
      const pageStart = page * 10 - 10;
      const pageEnd = page * 10 - 1;
      return filteredCoins.slice(pageStart, pageEnd)
    }
    const result = displayCoins()
    setDisplay(result);
  }, [page, filteredCoins])

  useEffect(() => {
    load(coins, setCoins, setFilteredCoins)
    const interval = setInterval(() => {
      setMinutes(minutes => minutes + 1);
      load(coins, setCoins, setFilteredCoins)
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = e => {
    setPage(1)
    setSearch(e.target.value);
    if (e.target.value === "") 
      return setFilteredCoins(coins)
    setFilteredCoins(coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase()) + coin.symbol.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const pageBack = () => {
    setPage(page > 1 ? page - 1 : page)
  }
  const pageNext = () => {
    setPage(filteredCoins.length > ((page + 1) * 10 - 10) && page < 100 ? page + 1 : page)
  }
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
          <Button onClick={() => pageBack()}><BsChevronDoubleLeft /></Button>
          <PageDiv>Page {page}</PageDiv>
          <Button onClick={() => pageNext()}><BsChevronDoubleRight /></Button>
        </PageSection>
      </CoinSearch>
      <TableDiv>
      <Table>
        <tr>
          <Th>Coin</Th>
          <Th>Price</Th>
          <Th>Market Cap</Th>
          <Th>24h %</Th>
          <Th detail>24-H Volume</Th>
        </tr>
        {coins ? display.map(coin => {
          return (
            <Coin
              key={coin.id}
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

const TableDiv = styled.div`
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
`


const PageDiv = styled.div`
  padding-top: 5px;
`

export default Coins
