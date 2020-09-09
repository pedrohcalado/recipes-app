import React from 'react';
import './App.css';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/comidas' component={Comidas} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
