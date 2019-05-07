export const UserConstants = {
  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

  LOGOUT: 'USERS_LOGOUT',

  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE: 'USERS_GETALL_FAILURE',

  DELETE_REQUEST: 'USERS_DELETE_REQUEST',
  DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
  DELETE_FAILURE: 'USERS_DELETE_FAILURE'
};

interface Username {
  user: string;
}
interface Password {
  password: string;
}
interface Error {
  error: string;
}

export interface LoginFormData {
  username: Username;
  password: Password;
  error?: Error;
}
// TODO: verify these types with the database.
export interface User {
  id?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  token?: string;
}

export interface UserState extends User {
  users?: Users;
  error?: Error['error'];
  loading?: boolean;
}

interface Users {
  users?: User[];
}


interface RegisterRequestAction {
  type: typeof UserConstants.REGISTER_REQUEST;
  user: User;
}
interface RegisterSuccessAction {
  type: typeof UserConstants.REGISTER_REQUEST;
  user: User;
}
interface RegisterFailureAction {
  type: typeof UserConstants.REGISTER_REQUEST;
  error: Error['error'];
}

interface LoginRequestAction {
  type: typeof UserConstants.REGISTER_REQUEST;
  user: User;
}
interface LoginSuccessAction {
  type: typeof UserConstants.REGISTER_REQUEST;
  user: User;
}
interface LoginFailureAction {
  type: typeof UserConstants.REGISTER_REQUEST;
  error: LoginFormData['error'];
}

interface LogoutAction {
  type: typeof UserConstants.REGISTER_REQUEST;
}

interface GetAllRequestAction {
  type: typeof UserConstants.REGISTER_REQUEST;
  users: Users;
}
interface GetAllSuccessAction {
  type: typeof UserConstants.REGISTER_REQUEST;
  users: Users;
}
interface GetAllFailureAction {
  type: typeof UserConstants.REGISTER_REQUEST;
  error: Error;
}

interface DeleteRequestAction {
  type: typeof UserConstants.REGISTER_REQUEST;
  id: User['id'];
}
interface DeleteSuccessAction {
  type: typeof UserConstants.REGISTER_REQUEST;
  id: User['id'];
}
interface DeleteFailureAction {
  type: typeof UserConstants.REGISTER_REQUEST;
  id: User['id'];
  error: Error['error'];
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