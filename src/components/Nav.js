import React from 'react';
import { Link } from 'react-router-dom';
import { downloadCsv } from '../utils';

export const Nav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          Home
        </Link>

        <Link to="/generate" className="navbar-item">
          Generate Phone numbers
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="#" className="button is-primary" onClick={downloadCsv}>
              <strong>Download Generated Numbers as CSV</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
