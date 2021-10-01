/* eslint-disable camelcase */
import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const getBooks = (books) => ({
  type: GET_BOOKS,
  payload: books,
});

const appId = 'yq5YmdxsUIpVNAFjPLOh';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const loadBooks = () => async (dispatch) => {
  const { data } = await axios.get(`${baseUrl}/apps/${appId}/books`);

  const bookData = [];
  Object.keys(data).forEach((key) => {
    bookData.push({ ...data[key][0], item_id: key });
  });

  dispatch(getBooks(bookData));
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (item_id) => ({
  type: REMOVE_BOOK,
  payload: item_id,
});



const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== payload);
    case GET_BOOKS:
      return payload;
    default:
      return state;
  }
};

export default reducer;
