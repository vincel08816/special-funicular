import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Logo = styled.img`
  height: 75px;
  box-shadow: 10px -10px  rgba(0,0,0,0.6);
  -moz-box-shadow: 10px -10px  rgba(0,0,0,0.6);
  -webkit-box-shadow: 10px -10px  rgba(0,0,0,0.6);
  -o-box-shadow: 10px -10px  rgba(0,0,0,0.6);
  border-radius: 100px;
  // @media screen and (max-width: 450px) {
  //   box-shadow: -20px -20px  rgba(0,0,0,0.6);
  //   -moz-box-shadow: -20px -20px  rgba(0,0,0,0.6);
  //   -webkit-box-shadow: -0px -13px  rgba(0,0,0,0.6);
  //   -o-box-shadow: -10px -10px  rgba(0,0,0,0.6);
  // }
`

export const LogoDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  width: 85px;
  height: 75px;
  // @media screen and (max-width: 450px) {
  //   justify-content: center;
  // }
`

export const Nav = styled.nav`
  width: 100vw;
  background-color: #232834;
  color: #fff;
  display: flex;
  height: 75px;
  justify-content: space-around ;
  border-bottom: 4px solid palevioletred;
  @media screen and (max-width: 768px) {
    // justify-content: space-between;
    // position: fixed;
    z-index: 10;
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
      @media screen and (max-height: 568px) {
        padding: 2vh;
        font-size: 15px;
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
    padding:0;
    padding: 0;
    margin-top: 14px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-55%, 75%);
    cursor: pointer;
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
  align-items: center;
  background: #1B2733;
  flex-direction: column;
  padding-bottom: 30px;
  position: fixed;
  width: 100%;
  z-index: 1;
  @media screen and (min-width: 768px) {
    display: none
  }
  @media screen and (max-height: 568px) {
    max-height: 70vh;
  }
`

  // @media screen and (min-width: 768px) {
  //   display: none
  // }