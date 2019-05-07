import {AlertConstants, AlertMessage} from './types';

function success(message: AlertMessage) {
  return {
    type: AlertConstants.SUCCESS,
    message: message
  };
}

function error(message: AlertMessage) {
  return {
    type: AlertConstants.ERROR,
    message: message
  };
}

function clear() {
  return {type: AlertConstants.CLEAR};
}

const alertActions = {
  success,
  error,
  clear
};

export default alertActions;