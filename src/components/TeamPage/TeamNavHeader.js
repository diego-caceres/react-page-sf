import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../../images/xSeedLogo.png';
import { Link } from 'react-router-dom'

const TeamNavHeader = () => (
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
          <Link to={'/#home'}>
            <span className="navItem">Home</span>
          </Link>
        </li>
        <li >
          <Link to={'/#hww'}>          
            <span className="navItem">How we work</span> 
          </Link>
        </li>
        <li >
          <Link to={'/#portfolio'}>     
            <span className="navItem">Portfolio</span>
          </Link>
        </li>
        <li >
          <Link to={'/team'}> 
            <span className="navItem">Team</span> 
          </Link> 
        </li>
        <li >
          <Link to={'/#contact'}>  
            <span className="navItem">Contact us</span> 
          </Link>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default TeamNavHeader;