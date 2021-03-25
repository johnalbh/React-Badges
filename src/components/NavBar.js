import React from 'react';
import logo from '../images/badge-header.svg';
import './styles/Navbar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <span className="font-weight-light"> Goon</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
