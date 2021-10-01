import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../../redux/books/books';
import './BookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();

  const [enteredTitle, setTitle] = useState('');
  const [enteredCategory, setCategory] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const bookData = {
      item_id: uuidv4(),
      title: enteredTitle,
      category: enteredCategory,
    };

    dispatch(addNewBook(bookData));

    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={submitHandler}>
      <h2 className="form-header">ADD NEW BOOK</h2>
      <div className="new-book__controls">
        <div className="new-book__control">
          <input type="text" placeholder="Book Title" value={enteredTitle} onChange={(event) => setTitle(event.target.value)} />
        </div>

        <div className="new-book__control">
          <input type="text" placeholder="Book Category" value={enteredCategory} onChange={(event) => setCategory(event.target.value)} />
        </div>

        <div className="new-book__actions">
          <button type="submit" className="add-btn">Add book</button>
        </div>
      </div>
    </form>
  );
};

export default BookForm;
