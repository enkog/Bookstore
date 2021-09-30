import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Books from './components/Books/Books';
import Categories from './components/Categories';
import NavBar from './components/Layout/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Books />
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
