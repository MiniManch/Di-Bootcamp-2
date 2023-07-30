import { NavLink } from "react-router-dom";
import { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to='/'>Home</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to='/profile'>Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/shop'>Shop</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
