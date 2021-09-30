import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Books from './components/Books/Books';
import Categories from './components/Categories';
import NavBar from './components/Layout/NavBar';

const DUMMY_BOOKS = [
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
  {
    id: uuidv4(),
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];
function App() {
  const [data, setBooks] = useState(DUMMY_BOOKS);
  const addBookHandler = (book) => {
    setBooks((prevBooks) => [book, ...prevBooks]);
  };

  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Books items={data} onAddBook={addBookHandler} />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
