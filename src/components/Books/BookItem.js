import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookItem } from '../../redux/books/books';
import classes from './BookItem.module.css';

const BookItem = (props) => {
  const {
    // eslint-disable-next-line camelcase
    item_id, category, title, author,
  } = props;

  const dispatch = useDispatch();

  const deleteBook = () => {
    dispatch(removeBookItem(item_id));
  };

  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <div className={classes.desc}>
          <li className={classes.category}>{category}</li>
          <li className={classes.title}>{title}</li>
          <li className={classes.author}>{author}</li>
        </div>
        <div className={classes.rmvDiv}>
          <button type="button">Comments</button>
          <button type="button" className={classes.remove} onClick={deleteBook}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className={classes.progress}>
        <div className={classes.Oval} />
        <div className={classes.progresstxt}>
          <span className={classes.percent}>
            {Math.floor(Math.random() * 100)}
            %
          </span>
          <span className={classes.status}>Completed</span>
        </div>
      </div>
      <div className={classes.chapUpdate}>
        <div className={classes.currentChap}>CURRENT CHAPTER</div>
        <div className={classes.chapter}>
          Chapter
          {` ${Math.floor(Math.random() * 30)}`}
        </div>
        <div className={classes.updateDiv}>
          <button type="button" className={classes.update}>UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  item_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
