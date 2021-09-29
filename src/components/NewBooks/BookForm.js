import React from 'react';
import './BookForm.css';

const BookForm = () => (
  <form>
    <h2 className="form-header">ADD NEW BOOK</h2>
    <div className="new-book__controls">
      <div className="new-book__control">
        <input type="text" placeholder="Book Title" />
      </div>
      <div className="new-book__control">
        <input type="text" placeholder="Book Author" />
      </div>
      <div className="new-book__control">
        <select>
          <option value="">Category</option>
          <option value="action">Action</option>
          <option value="science fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
      </div>
      <div className="new-book__actions">
        <button type="submit">Add book</button>
      </div>
    </div>
  </form>
);

export default BookForm;
