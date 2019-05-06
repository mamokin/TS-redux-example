import React from 'react';
import {Route, Switch} from 'react-router';
import Home from '../components/Home';

// https://github.com/supasate/connected-react-router/blob/master/examples/immutable/src/routes/index.js

const routes = (
  <>
    <Switch>
      <Route exact path='/' component={ Home } />
    </Switch>
  </>
);

export default routes;
