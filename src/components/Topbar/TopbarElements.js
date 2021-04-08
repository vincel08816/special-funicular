import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Logo = styled.img`
  // position: absolute;
  height: 75px;
  box-shadow: 10px -10px  rgba(0,0,0,0.6);
  -moz-box-shadow: 10px -10px  rgba(0,0,0,0.6);
  -webkit-box-shadow: 10px -10px  rgba(0,0,0,0.6);
  -o-box-shadow: 10px -10px  rgba(0,0,0,0.6);
  border-radius:100px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    // position: fixed;
    // margin-left: 45%
    margin-left: 20px
  }
  @media screen and (max-width: 600px) {
    // position: fixed;
    // margin-left: 38%
  }
`

export const Nav = styled.nav`
  width: 100%;
  background-color: #232834;
  color: #fff;
  display: flex;
  height: 75px;
  justify-content: space-around ;
  border-bottom: 4px solid palevioletred;
  @media screen and (max-width: 768px) {
    // justify-content: space-between;
    position: fixed;
    z-index: 1000;
  }

  ${({ wide }) =>
  wide && css`
    @media screen and (min-width: 863px) {
      width: 863px;
    }
    `
  }
`
export const NavLink = styled(Link)`
  display: block;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  white-space: pre;
  padding: 20px;
  margin-top: 30px;
  color: #fff;
  :hover {
    color: teal;
  }
  @media screen and (max-width: 768px) {
    display: none;
    padding: 20px;
    width: 100%
  }
  ${({ dropdown }) =>
  dropdown && css`
    @media screen and (max-width: 768px) {
      display: block;
      text-align: center;
      justify-content: center;
      :hover {
        color: teal;
        background-color: #1F2430; 
      }
    }
    `
  }
`

export const Logout = styled(Link)`
  display: block;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  white-space: pre;
  padding: 20px;
  margin-top: 30px;
  color: #fff;
  :hover {
    color: teal;
  }
  &.active {
  }
  @media screen and (max-width: 768px) {
    display: flex;
    padding:0;
    margin: 0;
    margin-top 10px;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  display:none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavDropDown = styled.div`
  top: 75px;
  align-items: center;
  background: #111111;
  flex-direction: column;
  padding-bottom: 30px;
  position: fixed;
  width: 100%;
  z-index: 1;
  @media screen and (min-width: 768px) {
      display: none
    }
`

  // @media screen and (min-width: 768px) {
  //   display: none
  // }