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
    <div>
      <h2 className="form-header">ADD NEW BOOK</h2>
      <form onSubmit={submitHandler}>

        <div className="new-book__controls">
          <div className="new-book__control">
            <input type="text" placeholder="Book Title" value={enteredTitle} onChange={(event) => setTitle(event.target.value)} />
          </div>

          <div className="new-book__control">
            <input type="text" placeholder="Category" value={enteredCategory} onChange={(event) => setCategory(event.target.value)} />
          </div>

          <div>
            <button type="submit" className="add-btn">ADD BOOK</button>
          </div>
        </div>
      </form>
    </div>

  );
};

export default BookForm;
