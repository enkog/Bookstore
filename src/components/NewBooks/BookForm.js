import React from 'react';
import './BookForm.css';

const BookForm = () => {
  return (
    <form>
      <div className='new-book__controls'>
        <div className='new-book__control'>
          <input type='text' />
        </div>
        <div className='new-book__control'>
          <select>
            <option>Action</option>
            <option>Science Fiction</option>
            <option>Economy</option>
          </select>
        </div>
      <div className='new-book__actions'>
        <button type='submit'>Add book</button>
      </div>
      </div>
    </form>
  );
}

export default BookForm;