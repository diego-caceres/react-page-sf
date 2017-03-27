import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../../images/xSeedLogo.png';

const NavHeader = () => (
  <Navbar collapseOnSelect className="navbar">
    <Navbar.Header>
      <Navbar.Brand >
        <a href="#home">
          <img className="navBrandImage" alt="Xseed logo" src={logo} draggable="false" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>      
      <Nav pullRight>
        <li>
          <a href="#home">
            <span className="navItem">Home</span>
          </a>
        </li>
        <li >
          <a href="#hww">
            <span className="navItem">How we work</span> 
          </a>
        </li>
        <li >
          <a href="#portfolio">
            <span className="navItem">Portfolio</span>
          </a>
        </li>
        <li >
          <a href="#team">
            <span className="navItem">Team</span> 
          </a>
        </li>
        <li >
          <a href="#contact">
            <span className="navItem">Contact us</span> 
          </a>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavHeader;