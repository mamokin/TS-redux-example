import {combineReducers} from 'redux-immutable';
import {History} from 'history';
import {RouterState, connectRouter} from 'connected-react-router';
import {reducer as login} from 'redux-form';

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  form: login
});

export interface State {
  router: RouterState;
}

export default rootReducer;