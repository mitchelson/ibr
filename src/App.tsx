import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/styles/global.css';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Routes from './router';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Routes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
