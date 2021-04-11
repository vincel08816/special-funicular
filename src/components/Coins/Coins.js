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
  Th,
  ButtonDiv,
  ButtonWrapper,
  Tr,
} from './CoinsStyles.js'

import {
  Logoth,
  Nameth,
  Priceth,
  MarketCapth,
  Volumeth,
  PriceChangeth
} from './CoinsStyles'
import { BsChevronDoubleLeft, BsChevronLeft, BsChevronDoubleRight,BsChevronRight } from 'react-icons/bs';
import Portal from '../Portal/Portal'
import CoinModal from '../CoinModal/CoinModal'

const load = async (setCoins) => {
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
  })).catch(errors => {
    console.log(errors)
  })
};

const filter = (coins, search) => {
  if (coins) {
    return coins.filter(coin => (coin.name.toLowerCase().includes(search.toLowerCase()) + coin.symbol.toLowerCase().includes(search.toLowerCase())));
  }
  return []
}
const Coins = () => {
  const [coins, setCoins] = useState()
  const [page, setPage] = useState(1)
  const [display, setDisplay] = useState([])
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [coinid, setCoinid] = useState('')

  useEffect(() => {
    const displayCoins = () => {
      const pageStart = page * 10 - 10;
      const pageEnd = page * 10 - 1;
      return filteredCoins.slice(pageStart, pageEnd)
    }
    let filteredCoins = filter(coins, search)

    const result = displayCoins(coins, search)
    setDisplay(result);
  }, [coins, page, search])

  // updates every 30 seconds
  useEffect(() => {
    load(setCoins)
    const interval = setInterval(() => {
      load(setCoins)
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = e => {
    if (e.target.value !== search)
      setPage(1)
    setSearch(e.target.value);
  };

  // const pageBack = () => {
  //   setPage(page > 1 ? page - 1 : page)
  // }
  const pageNext = () => {
    let filteredCoins = filter(coins, search)
    setPage(filteredCoins.length > ((page + 1) * 10 - 10) && page < 100 ? page + 1 : page)
  }
  const pageLast = () => {
    let filteredCoins = filter(coins, search)
    setPage(Math.ceil(filteredCoins.length / 10))
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
        <ButtonWrapper>
          <ButtonDiv>
            <Button onClick={() => setPage(1)}><BsChevronDoubleLeft /></Button>
            <Button onClick={() => setPage(page > 1 ? page - 1 : page)}><BsChevronLeft /></Button>
          </ButtonDiv>
          <PageDiv>Page {page}</PageDiv>
          <ButtonDiv>
            <Button onClick={() => pageNext()}><BsChevronRight /></Button>
            <Button onClick={() => pageLast()}><BsChevronDoubleRight /></Button>
          </ButtonDiv>
        </ButtonWrapper>
    </Container>
  )
}

export default Coins
