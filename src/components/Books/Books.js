import React from 'react';
import PropTypes from 'prop-types';
import BookForm from '../NewBooks/BookForm';
import BookItem from './BookItem';

const Books = (props) => {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.map((data) => (
          <BookItem
            key={data.id}
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
Books.propTypes = {

  items: PropTypes.string.isRequired,

};
export default Books;
