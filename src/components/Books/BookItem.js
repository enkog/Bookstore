import React from 'react';
import PropTypes from 'prop-types';
import classes from './BookItem.module.css';

const BookItem = (props) => {
  const { category, title, author } = props;

  return (
    <div className={classes.items}>
      <li className={classes.category}>{category}</li>
      <li className={classes.title}>{title}</li>
      <li className={classes.author}>{author}</li>
    </div>
  );
};
BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookItem;
