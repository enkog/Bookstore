import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BookForm.css';

const BookForm = (props) => {
  const [enteredTitle, setTitle] = useState('');
  const [enteredAuthor, setAuthor] = useState('');
  const [enteredCategory, setCategory] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const bookData = {
      title: enteredTitle,
      author: enteredAuthor,
      category: enteredCategory,
    };

    props.onSaveBookData(bookData);

    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <form onSubmit={submitHandler}>
      <h2 className="form-header">ADD NEW BOOK</h2>
      <div className="new-book__controls">
        <div className="new-book__control">
          <input type="text" placeholder="Book Title" value={enteredTitle} onChange={titleChangeHandler} />
        </div>

        <div className="new-book__control">
          <input type="text" placeholder="Book Author" value={enteredAuthor} onChange={authorChangeHandler} />
        </div>

        <div className="new-book__control">
          <input type="text" placeholder="Book Category" value={enteredCategory} onChange={categoryChangeHandler} />
        </div>

        <div className="new-book__actions">
          <button type="submit" className="add-btn">Add book</button>
        </div>
      </div>
    </form>
  );
};

BookForm.propTypes = {
  onSaveBookData: PropTypes.instanceOf(Object).isRequired,
};

export default BookForm;
