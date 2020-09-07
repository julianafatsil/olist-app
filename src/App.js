import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard, Welcome, Login, Order, Product, Questions, Forum, Financeiro } from './pages/Index';
import { CardHelp } from './features/components/Index';
import './styles/css/font-awesome.min.css';
import './styles/App.css';


function App() {
  return (
    <React.Fragment>
      {/* {<CardHelp />} */}
          <Switch>
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/financeiro" component={Financeiro} />
          <Route exact path="/" component={Login} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
