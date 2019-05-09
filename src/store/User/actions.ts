import {UserConstants, LoginFormData, User, Users} from './types';
import AlertActions from '../Alert/actions';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {AlertMessage} from '../Alert/types';

// For simpler use within functions below, we 'extend' the LoginFormData interface.
interface Username {
  username: LoginFormData['username'];
}
interface Password {
  password: LoginFormData['password'];
}
interface Error {
  error: LoginFormData['error'];
}

function login(username: Username, password: Password) {
  function request(user: Username) {
    return {
      type: UserConstants.LOGIN_REQUEST,
      user: user
    };
  }

  function success(user: Username) {
    return {
      type: UserConstants.LOGIN_SUCCESS,
      user: user
    };
  }

  function failure(error: AlertMessage) {
    return {
      type: UserConstants.LOGIN_FAILURE,
      error: error
    };
  }

  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(request(username));

    userService.login(username, password)
      .then(
        (user: User) => { 
          dispatch(success(user));
          history.push('/');
        },
        (error: AlertMessage) => {
          dispatch(failure(error));
          dispatch(AlertActions.error(error));
        }
      );
  };
}

function logout() {
  userService.logout();
  return {type: UserConstants.LOGOUT};
}

function register(user: User) {
  function request(user: User) {
    return {
      type: UserConstants.REGISTER_REQUEST,
      user: user
    };
  }
  
  function success(user: AlertMessage['message']) {
    return {
      type: UserConstants.REGISTER_SUCCESS,
      user: user
    };
  }
  
  function failure(error: AlertMessage) {
    return {
      type: UserConstants.REGISTER_FAILURE,
      error: error
    };
  }

  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(request(user));
    let message: AlertMessage['message'] = 'Registration successful';

    userService.register(user)
      .then(
        (user: AlertMessage['message']) => {
          dispatch(success(user));
          history.push('/login');
          dispatch(AlertActions.success({message}));
        },
        (error: AlertMessage) => {
          dispatch(failure(error));
          dispatch(AlertActions.error(error));
        }
      );
  };
}

function getAll() {
  function request() {
    return {type: UserConstants.GETALL_REQUEST};
  }

  function success(users: Users) {
    return {
      type: UserConstants.GETALL_SUCCESS,
      users: users
    };
  }

  function failure(error: Error) {
    return {
      type: UserConstants.GETALL_FAILURE,
      error: error
    };
  }

  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(request());

    userService.getAll()
      .then(
        (users: User[]) => dispatch(success(users)),
        (error: Error) => dispatch(failure(error))
      );
  };

}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id: User['id']) {
  function request(id: User['id']) {
    return {
      type: UserConstants.DELETE_REQUEST, 
      id: id
    };
  }

  function success(id: User['id']) {
    return {
      type: UserConstants.DELETE_SUCCESS,
      id: id
    };
  }

  function failure(id: User['id'], error: Error) {
    return {
      type: UserConstants.DELETE_FAILURE,
      id: id,
      error: error
    };
  }
  
  return (dispatch) => {
    dispatch(request(id));

    userService.delete(id)
      .then(
        (id: User['id']) => dispatch(success(id)),
        (error: Error) => dispatch(failure(id, error))
      );
  };

}

const userActions = {
  login,
  logout,
  register,
  getAll,
  _delete
};

export default userActions;