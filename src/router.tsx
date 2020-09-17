import React from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import NewRegister from './pages/NewRegister';
import ScrollToTop from './utils/ScrollToTop';

function Routes() {
    const location = useLocation();
    return (
        <>
            <ScrollToTop>
              <Switch location={location}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/new-register" component={NewRegister} />
                {/* <Route path="*" exact component={NotFound} /> */}
              </Switch>
            </ScrollToTop>
      </>
    )
}
export default Routes;