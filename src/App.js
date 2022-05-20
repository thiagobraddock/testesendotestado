import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NotFound from './NotFound';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="*" component={ NotFound } />

      </Switch>
    </div>
  );
}

export default App;
