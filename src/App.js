import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard, Welcome, Login } from './pages/Index';

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
