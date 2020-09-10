import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/comidas" component={Comidas} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
