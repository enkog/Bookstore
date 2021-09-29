import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Books from './components/Books/Books';
import Categories from './components/Categories';
import NavBar from './components/Layout/NavBar';

function App() {
  const data = [
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];

  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Books items={data} />
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
