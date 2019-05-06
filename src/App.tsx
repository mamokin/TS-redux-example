import React from 'react';
import Immutable from 'immutable';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader/root';
import {ConnectedRouter} from 'connected-react-router/immutable';
import routes from './routes';
import configureStore, {history} from './store/configureStore';

const initialState = Immutable.Map();
// Initialize store
const store = configureStore(initialState);

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