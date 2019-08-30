import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="/" active>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/our-team">Our Team</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Contact us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Login</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Navbar;