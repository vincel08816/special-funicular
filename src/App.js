import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import Coins from './components/Coins/Coins'
import AbstractVectors from './assets/img/AbstractVectors.jpg'

// background img 
const BackgroundImg = styled.div`
  content: "";
  opacity: 0.7;
  background: rgb(26, 31, 41) url(${AbstractVectors}) no-repeat fixed top;
  background-size: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: -1;
  background-blend-mode: darken;
`
const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`

function App() {
  return (
    <Router>
      <BackgroundImg />
        <PageContainer>
          <div id="modal-root" />
          <Topbar />
          {/* <Switch> */}
            <Route exact path='/' component={Coins} />
          {/* </Switch> */}
          <Footer />
        </PageContainer>
    </Router>
  );
}

export default App