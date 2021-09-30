import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    category: 'Action',
    title: 'The Hunger games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
