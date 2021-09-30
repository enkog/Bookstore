import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import BookForm from '../NewBooks/BookForm';
import BookItem from './BookItem';

const Books = (props) => {
  const { items } = props;

  const saveBookDataHandler = (enteteredBookData) => {
    const bookData = {
      ...enteteredBookData,
    };
    props.onAddBook(bookData);
  };

  return (
    <div>
      <ul>
        {items.map((data) => (
          <BookItem
            key={uuidv4()}
            category={data.category}
            title={data.title}
            author={data.author}
          />
        ))}
      </ul>
      <BookForm onSaveBookData={saveBookDataHandler} />
    </div>
  );
};

Books.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  onAddBook: PropTypes.instanceOf(Object).isRequired,

};
export default Books;
