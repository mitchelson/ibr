import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={HomePage} />
            <Route path="/novo-registro" component={TeacherForm} />
        </BrowserRouter>
    )
}
export default Routes;