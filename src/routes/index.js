import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import WhiteBoard from '../pages/WhiteBoard/WhiteBoard';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:whiteboards/:id" component={WhiteBoard} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
