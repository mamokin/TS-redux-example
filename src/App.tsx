import React from 'react';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader/root';
import {ConnectedRouter} from 'connected-react-router/immutable';
import routes from './routes';
import {store} from './helpers/store';
import {history} from './helpers/history';

const App = () => {
  return (
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        {routes}
      </ConnectedRouter>
    </Provider>
  );
};

export default hot(App);