import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = () => (
  <header className={classes.header}>
    <div className={classes.logo}>Bookstore CMS</div>
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/" activeClassName={classes.active}>BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories" activeClassName={classes.active}>CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
