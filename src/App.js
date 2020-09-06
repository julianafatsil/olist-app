import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Login} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
