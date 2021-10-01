import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookItem } from '../../redux/books/books';
import classes from './BookItem.module.css';

const BookItem = (props) => {
  const {
    // eslint-disable-next-line camelcase
    item_id, category, title,
  } = props;

  const dispatch = useDispatch();

  const deleteBook = () => {
    dispatch(removeBookItem(item_id));
  };

  return (
    <div>
      <div className={classes.items}>
        <div className={classes.desc}>
          <li className={classes.category}>{category}</li>
          <li className={classes.title}>{title}</li>
        </div>
        <div className={classes.rmvDiv}>
          <button type="button">Comments</button>
          <button type="button" className={classes.remove} onClick={deleteBook}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  item_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookItem;
