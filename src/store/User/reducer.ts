import {UserConstants, UserActionTypes, UserState, User} from './types';

const initialState: UserState = {
  id: '',
  username: '',
  firstName: '',
  lastName: '',
  password: '',
  token: '',
  error: ''
};

export function usersReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case UserConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case UserConstants.GETALL_SUCCESS:
      return {
        users: action.users
      };
    case UserConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case UserConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        users: state.users.map((user: User) => user.id === action.id
          ? {...user, deleting: true}
          : user
        )
      };
    case UserConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        users: state.users.filter((user: User) => user.id !== action.id)
      };
    case UserConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        users: state.users.map((user: User) => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            // const {deleting, ...userCopy} = user;
            // return copy of user with 'deleteError:[error]' property
            // return {...userCopy, deleteError: action.error};
          }

          return user;
        })
      };
    default:
      return state;
  }
}