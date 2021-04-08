import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components'
import { MdClose } from 'react-icons/md';
import axios from 'axios'
import Spinner from '../Spinner/Spinner'

import ReactHtmlParser from 'react-html-parser';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  background: #fff;
  display: grid;
  padding: 50px;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 20px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-height: 640px) {
    height: 70%;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
  padding-bottom: 20px;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
const Percent = styled.p`
  color: ${props => props.color ? props.color : null}
`

const Percentage = ({ number }) => {
  if (number === undefined) return <>NaN</>
  
  return <Percent color={number >= 0 ? 'green' : 'red'}>{number.toFixed(2)}%</Percent>
}

const CoinTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`

const Price = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`
const Img = styled.img`
  @media screen and (max-width: 400px) {
    height: 40px;
  }
`
const H2 = styled.h2`
  margin-bottom: 10px;
`

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
