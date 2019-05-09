import {UserActionTypes, User, Users, UsersState, UserActionType} from './types';
import {List} from 'immutable';

const initialState = new UsersState({
  accounts:
    new Users({
      users: List([
        new User({
          id: -1,
          username: '',
          firstName: '',
          lastName: '',
          password: '',
          token: '',
          deleting: false
        })
      ])
    }),
  loading: false,
  error: ''
});

export function usersReducer(
  state = initialState,
  action: UserActionTypes
// ): Record<string, IntUsers> {
// ): Record<string, IntUsersState> {
// ): Record<string, IntUsersState> {
): UsersState {
  switch (action.type) {
    case UserActionType.GETALL_REQUEST:
      return state.merge({
        loading: action.loading
      });
    case UserActionType.GETALL_SUCCESS:
      return state.merge({
        accounts: action.users
      });
    case UserActionType.GETALL_FAILURE:
      return state.merge({
        error: action.error
      });
    case UserActionType.DELETE_REQUEST:
    // add 'deleting:true' property to user being deleted
      let newUsers = state.get('accounts').get('users').map((user) => user.get('id') === action.id
        ? {...user, deleting: true}
        : user
      );
      return state.setIn(['accounts', 'users'], newUsers);
    case UserActionType.DELETE_SUCCESS:
      newUsers = state.get('accounts').get('users').filterNot(
        (u) => {
          return u.get('id') === action.id;
        }
      );
      return state.setIn(['accounts', 'users'], newUsers);
    case UserActionType.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      let newUser = state.get('accounts').get('users').map((user) => {
        if (user.get('id') === action.id) {
          // {user.delete('deleting');}
          state.deleteIn(['accoutns', 'users', 'deleting']);
        }
      });

      return state.setIn(['accounts', 'users'], newUser);
    default:
      return state;
  }
}