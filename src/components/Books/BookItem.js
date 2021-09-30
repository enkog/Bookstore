import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import classes from './BookItem.module.css';

const BookItem = (props) => {
  const {
    id, category, title, author,
  } = props;

  const dispatch = useDispatch();

  const deleteBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className={classes.items}>
      <div>
        <li className={classes.category}>{category}</li>
        <li className={classes.title}>{title}</li>
        <li className={classes.author}>{author}</li>
      </div>
      <button
        type="button"
        className={classes.remove}
        onClick={deleteBook}
      >
        Remove
      </button>
    </div>
  );
};
BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookItem;
