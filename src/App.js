import React from 'react';
import logo from './logo.svg';
import Header from './components/navbar';
import './App.css';
import {Route, BrowserRouter, Switch, NavLink} from 'react-router-dom';
import Home from './components/home/home';

function App() {
  return (
    <React-Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact/>
        </Switch>
      </BrowserRouter>
    </React-Fragment>
  );
}

export default App;
