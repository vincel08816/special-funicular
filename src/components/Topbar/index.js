import React, { useState } from 'react'
import {
  Nav,
  NavLink,
  NavDropDown,
  Logo,
  NavMenu,
  Button,
  Bars,
  Logout
} from './TopbarElements';

const imgLink = "https://upload.wikimedia.org/wikipedia/commons/9/9a/BTC_Logo.svg"

const Topbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false)

  return (
    <>
    <Nav>
      <Button onClick={() => setDisplayMenu(!displayMenu)}><Bars /></Button>
      <NavMenu>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>About</NavLink>
        <NavLink to='/'>Store</NavLink>
      </NavMenu>
        <Logo src={imgLink} alt=""/>
      <NavMenu>
        <NavLink to='/'>Team</NavLink>
        <NavLink to='/'>Contact Us</NavLink>
        <Logout to='/'>Logout</Logout>
      </NavMenu>
    </Nav>
    {displayMenu ? <NavDropDown>
        <NavLink dropdown to='/'>Home</NavLink>
        <NavLink dropdown to='/'>About</NavLink>
        <NavLink dropdown to='/'>Store</NavLink>
        <NavLink dropdown to='/'>Team</NavLink>
        <NavLink dropdown to='/'>Contact Us</NavLink>
    </NavDropDown> : null}

    </>
  )
}
export default Topbar