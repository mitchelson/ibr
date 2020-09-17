import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import NewRegister from './pages/NewRegister';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={HomePage} />
            <Route path="/new-register" component={NewRegister} />
        </BrowserRouter>
    )
}
export default Routes;