import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard, Welcome, Login, Order, Product, Questions, Forum } from './pages/Index';
import { CardHelp, Header, Menu} from './features/components/Index';
import './styles/css/font-awesome.min.css';
import './styles/App.css';


function App() {
  return (
    <React.Fragment>
      {/* {<CardHelp />} */}
      <Header />
      <div className="content">
          <Menu />
          <Switch>
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
