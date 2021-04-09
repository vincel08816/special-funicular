import styled from 'styled-components'
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  max-width: 90vw;
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

export const ModalContent = styled.div`
  width: 100%;
  color: #141414;
  p {
    // margin-bottom: 1rem;
    text-align: right;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
  padding-bottom: 20px;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
export const Percent = styled.p`
  color: ${props => props.color ? props.color : null}
`

export const Percentage = ({ number }) => {
  if (number === undefined) return <>NaN</>
  
  return <Percent color={number >= 0 ? 'green' : 'red'}>{number > 0 ? '+' : null}{number.toFixed(2)}%</Percent>
}

export const CoinTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`

export const Price = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`
export const Img = styled.img`
  @media screen and (max-width: 400px) {
    height: 40px;
  }
`
export const H2 = styled.h2`
  margin-bottom: 10px;
`