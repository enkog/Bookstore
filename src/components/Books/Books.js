import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from '../NewBooks/BookForm';
import BookItem from './BookItem';
// eslint-disable-next-line import/named
import { loadBooks } from '../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <div>
      <ul>
        {books && books.map((book) => (
          <BookItem
            key={book.item_id}
            item_id={book.item_id}
            category={book.category}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <hr />
      <BookForm />
    </div>
  );
};

export default Books;
