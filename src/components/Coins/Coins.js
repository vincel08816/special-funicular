import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinRow from './CoinRow';
import { 
  Container,
  CoinSearch,
  Searchbar,
  SearchbarInput,
  PageSection,
  Button,
  PageDiv,
  TableDiv,
  Table,
  Th
} from './CoinsStyles'

import {
  Logoth,
  Nameth,
  Priceth,
  MarketCapth,
  Volumeth,
  PriceChangeth
} from './CoinsStyles'

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

  // console.log("coins.length", coins ? coins.length: null)

  console.log(search)
  useEffect(() => {
    const displayCoins = () => {
      const pageStart = page * 10 - 10;
      const pageEnd = page * 10 - 1;
      return filteredCoins.slice(pageStart, pageEnd)
    }
    const result = displayCoins()
    
    setDisplay(result);
  }, [page, filteredCoins])

  // updates every 30 seconds
  useEffect(() => {
    load(coins, setCoins, setFilteredCoins)
    const interval = setInterval(() => {
      setMinutes(minutes => minutes + 1);
      load(coins, setCoins, setFilteredCoins)
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
    if ((filteredCoins.length > (page * 10 - 10)) && page < 100)
      setPage(1);
    if (e.target.value === "") 
      return setFilteredCoins(coins)
    setFilteredCoins(coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const pageBack = () => {
    if (page > 1) setPage(page - 1)
  }
  const pageNext = () => {
    if (filteredCoins.length > ((page + 1) * 10 - 10) && page < 100)
      setPage(page + 1)
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
        <thead>
          <tr>
            <Logoth detail> </Logoth>
            <Nameth>Coin</Nameth>
            <Priceth>Price</Priceth>
            <MarketCapth>Market Cap</MarketCapth>
            <PriceChangeth>24h %</PriceChangeth>
            <Volumeth detail>24-H Volume</Volumeth>
          </tr>
        </thead>
        <tbody>
        {coins ? display.map(coin => {
          return (
            <CoinRow
              key={coin.id}
              coin={coin}
              setOpen={setOpen}
              setCoinid={setCoinid}
            />
          );
        }): null}
        </tbody>
      </Table>
      </TableDiv>
    </Container>
  )
}

export default Coins
