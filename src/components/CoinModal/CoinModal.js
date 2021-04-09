import React, { useRef, useEffect, useState } from 'react';
import { Background, ModalWrapper, ModalContent, CloseModalButton, Header, CoinTitle, Img, Price, H2, Percentage} from './CoinModalStyles'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'

import ReactHtmlParser from 'react-html-parser';

const CoinModal = ({open, setOpen, coinid }) => {
  const modalRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    const load = async () => {
      axios.get(`https://api.coingecko.com/api/v3/coins/${coinid}?sparkline=false`)
      .then(res => { setData(res.data); console.log(res.data)})
      .catch(error => console.log(error));  
    };
    setData()
    if (coinid) load()
  }, [coinid])

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setData()
      setOpen(false);
    }
  };
  return (
    <>
      {open ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper >
            <CloseModalButton
              aria-label='Close modal'
              onClick={() => setOpen(prev => !prev)}
            />
            {data ?
            <ModalContent>
              <Header>
                <CoinTitle><Img src={data.image.small} alt=""/>{data.name}({data.symbol.toUpperCase()})</CoinTitle>
                <Price><h2>${data.market_data.current_price.usd}</h2><Percentage number={data.market_data.price_change_percentage_24h_in_currency.usd}/></Price>
              </Header>
              <H2>What is {data.name}?</H2>
              {data.description.en ? 
                <section>{ ReactHtmlParser(data.description.en) }</section> : 
                "No description..."
              }
            </ModalContent>:
            <Spinner />}
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default CoinModal
