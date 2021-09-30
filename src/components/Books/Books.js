import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookForm from '../NewBooks/BookForm';
import BookItem from './BookItem';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div>
      <ul>
        {books.map((data) => (
          <BookItem
            key={uuidv4()}
            id={uuidv4()}
            category={data.category}
            title={data.title}
            author={data.author}
          />
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

export default Books;
