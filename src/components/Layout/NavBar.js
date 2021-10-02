import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
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
    <div className={classes.profDiv}>
      <CgProfile className={classes.profile} />
    </div>
  </header>
);

export default NavBar;
