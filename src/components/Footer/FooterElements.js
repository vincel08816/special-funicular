import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  background-color: #33415E;
  height: 400px;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
  justify-content: center;
  align-content: center;
`;

export const FooterText = styled.div`
  color: #FFF;
  display: flex;
  text-decoration: none;
  height: 100%
  cursor: pointer;
  text-align: center;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-horizontal: 10rem;
  text-align: center;
`;