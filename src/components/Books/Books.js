import React from 'react';
import BookForm from '../NewBooks/BookForm';

const Books = () => {
  return (
    <div>
      <ul>
          <li>Category</li>
          <li>Title</li>
          <li>Author</li>
      </ul>
      <button type="button">Remove</button>
      <BookForm />
    </div>
  );
}

export default Books;
