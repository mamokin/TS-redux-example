import {AlertConstants, AlertState, AlertActionTypes} from './types';

const initialState: AlertState = {
  messages: []
};

export function alertReducer(
  state = initialState,
  action: AlertActionTypes
): AlertState {
  switch (action.type) {
    case AlertConstants.SUCCESS:
    case AlertConstants.ERROR:
      return {
        messages: [...state.messages, action.message]
      };
    case AlertConstants.CLEAR:
      return initialState;
    default:
      return state;
  }
}