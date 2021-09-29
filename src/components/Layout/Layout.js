import React from 'react';
import PropTypes from 'prop-types';
import classes from './Layout.module.css';
import NavBar from './NavBar';

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <NavBar />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
