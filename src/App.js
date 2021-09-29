import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
