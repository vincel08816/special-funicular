import React, { useState } from 'react'
import {
  Nav,
  NavLink,
  NavDropDown,
  Logo,
  NavMenu,
  Button,
  Bars,
  Logout,
  LogoDiv
} from './TopbarElements';
import { useSpring, animated } from 'react-spring';

const imgLink = "https://upload.wikimedia.org/wikipedia/commons/9/9a/BTC_Logo.svg"

const Topbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false)

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: displayMenu ? 1 : 0,
    transform: displayMenu ? `translateY(0%)` : `translateY(-100%)`
  });

  return (
    <>
    <Nav>
      <Nav wide>
        <Button dropdown onClick={() => setDisplayMenu(!displayMenu)}><Bars /></Button>
        <NavMenu>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>About</NavLink>
          <NavLink to='/'>Store</NavLink>
        </NavMenu>
        <LogoDiv>
          <Logo src={imgLink} alt=""/>
        </LogoDiv>
        <NavMenu>
          <NavLink to='/'>Team</NavLink>
          <NavLink to='/'>Contact Us</NavLink>
          <Logout to='/'>Logout</Logout>
        </NavMenu>
      </Nav>
    </Nav>
    <animated.div style={animation}>
    {displayMenu ? <NavDropDown>
        <NavLink dropdown to='/'>Home</NavLink>
        <NavLink dropdown to='/'>About</NavLink>
        <NavLink dropdown to='/'>Store</NavLink>
        <NavLink dropdown to='/'>Team</NavLink>
        <NavLink dropdown to='/'>Contact Us</NavLink>
    </NavDropDown> : null}
    </animated.div>
    </>
  )
}
export default Topbar