import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './App.css';
import Books from './components/Books/Books';
import Categories from './components/Categories';
import NavBar from './components/Layout/NavBar';

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
