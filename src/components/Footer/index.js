import React from 'react'
import styled from 'styled-components'
import { Footer, Nav, FooterText } from './FooterElements'
import { FooterLink } from './FooterLink'

import twitter from "../../assets/img/social_twitter.png";
import medium from "../../assets/img/social_medium.png";
import telegram from "../../assets/img/social_telegram.png";
import discord from "../../assets/img/social_discord.png";


const FooterContainer = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #33415E;
  bottom: 0;
  width: 100%;
  color: white;
  height: 100px;
  flex-direction: column;
  position: absolute;
`
const SocialIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

const FooterDiv = styled.div`
  font-size: ${({size}) => size ? size : "12px"}
  line-height: 1;
  text-align: center;
  margin-bottom: 10px;
`

const FooterNav = () => {
  return (
    <FooterContainer>
        <FooterDiv>Copyright &copy; Asdfasdf 2021</FooterDiv>
        <Nav>
          <SocialIcon src={discord}/>
          <SocialIcon src={twitter}/>
          <SocialIcon src={telegram}/>
          <SocialIcon src={medium}/>
        </Nav>
    </FooterContainer>
  )
}

export default FooterNav