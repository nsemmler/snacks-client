import {Navbar, NavItem, Nav, NavLink, NavbarBrand} from 'reactstrap';
import React from 'react';

const NavComponent = () => {
  return (<Navbar>
    <NavbarBrand>Galvanize Snacks</NavbarBrand>
    <Nav className="ml-auto">
      <NavItem>
        <NavLink href="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/snacks">Snacks</NavLink>
      </NavItem>
    </Nav>
  </Navbar>)
}

export default NavComponent
