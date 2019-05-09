import {Record, List} from 'immutable';

export enum UserActionType {
  REGISTER_REQUEST = 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS = 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE = 'USERS_REGISTER_FAILURE',

  LOGIN_REQUEST = 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE = 'USERS_LOGIN_FAILURE',

  LOGOUT = 'USERS_LOGOUT',

  GETALL_REQUEST = 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS = 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE = 'USERS_GETALL_FAILURE',

  DELETE_REQUEST = 'USERS_DELETE_REQUEST',
  DELETE_SUCCESS = 'USERS_DELETE_SUCCESS',
  DELETE_FAILURE = 'USERS_DELETE_FAILURE'
};
// Interface Actions
interface RegisterRequestAction {
  type: UserActionType.REGISTER_REQUEST;
  user: User;
}
interface RegisterSuccessAction {
  type: UserActionType.REGISTER_SUCCESS;
  user: User;
}
interface RegisterFailureAction {
  type: UserActionType.REGISTER_FAILURE;
  error: Error['error'];
}

interface LoginRequestAction {
  type: UserActionType.LOGIN_REQUEST;
  user: User;
}
interface LoginSuccessAction {
  type: UserActionType.LOGIN_SUCCESS;
  user: User;
}
interface LoginFailureAction {
  type: UserActionType.LOGIN_FAILURE;
  error: LoginFormData['error'];
}

interface LogoutAction {
  type: UserActionType.LOGOUT;
}

interface GetAllRequestAction {
  type: UserActionType.GETALL_REQUEST;
  loading: true;
}
interface GetAllSuccessAction {
  type: UserActionType.GETALL_SUCCESS;
  users: Users;
}
interface GetAllFailureAction {
  type: UserActionType.GETALL_FAILURE;
  error: Error;
}

interface DeleteRequestAction {
  type: UserActionType.DELETE_REQUEST;
  users: Users;
}
interface DeleteSuccessAction {
  type: UserActionType.DELETE_SUCCESS;
  id: User['id'];
}
interface DeleteFailureAction {
  type: UserActionType.DELETE_FAILURE;
  id: User['id'];
  error: Error['error'];
}

/**
 * Define interfaces
 */
interface Username {
  user: string;
}

interface Password {
  password: string;
}

interface Error {
  error: string;
}

// Interface Login form related data
export interface LoginFormData {
  username: Username;
  password: Password;
  error?: Error;
}

// User info
export interface IntUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  token: string;
  deleting?: boolean;
}

// List of users
export interface IntUsers {
  users: List<Record<IntUser>>;
}

// UsersState for reducer
export interface IntUsersState {
  accounts: Record<IntUsers>;
  loading: boolean;
  error: Error['error'];
}

/**
 * Allow creation of a user record
 */
// Dummy user
const dummyUserData: IntUser = {
  id: -1,
  username: '',
  firstName: '',
  lastName: '',
  password: '',
  token: '',
  deleting: false
};

/**
 * Accepts data that matches the defined user data in IntUser and creates a new User record.
 *
 * Example data to pass in:
    const Bob = {
      id: 1,
      username: 'BobS',
      firstName: 'Bob',
      lastName: 'Saggy',
      password: 'pass123',
      token: 'some-security-token'
    };
 * @class User
 * @extends {Record(dummyUserData)}: Create an immutable record with the data.
 * @implements {IntUser}: Ensure data matches this interface.
 */
export class User extends Record(dummyUserData) implements IntUser {
  constructor(props: IntUser) {
    super(props);
  }
}

/**
 * Allow creation of nested users record.
 */
// Make array of dummy users
const dummyUsersData: IntUsers = {
  users: List([new User(dummyUserData)])
};

/**
 * Accepts data that matches the defined users data in IntUsers and creates a new Users record.
 *
 * Example data to pass in:
    const usersList = [
      new User({
        id: 1,
        username: 'BobS',
        firstName: 'Bob',
        lastName: 'Saggy',
        password: 'pass123',
        token: 'some-security-token'
      }),
      new User({
        id: 1,
        username: 'JoeC',
        firstName: 'Joe',
        lastName: 'Carter',
        password: 'pass123',
        token: 'some-security-token'
      })
    ];
 * @class Users
 * @extends {Record(usersData)}: Create an immutable record with the data.
 * @implements {IntUsers}: Ensure data matches this interface.
 */
export class Users extends Record(dummyUsersData) implements IntUsers {
  constructor(props: IntUsers) {
    super(props);
  }
}

/**
 * Allow creation of users state record for use in reducer.
 */
export const dummyUsersState: IntUsersState = {
  accounts: new Users(dummyUsersData),
  loading: false,
  error: ''
};

export class UsersState extends Record(dummyUsersState) implements IntUsersState {
  constructor(props: IntUsersState) {
    super(props);
  }
}



export type UserActionTypes =
  RegisterRequestAction &
  RegisterSuccessAction &
  RegisterFailureAction &
  LoginRequestAction &
  LoginSuccessAction &
  LoginFailureAction &
  LogoutAction &
  GetAllRequestAction &
  GetAllSuccessAction &
  GetAllFailureAction &
  DeleteRequestAction &
  DeleteSuccessAction &
  DeleteFailureAction;