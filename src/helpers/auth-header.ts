import {User} from '../store/User/types';

export function authHeader() {
  // return authorization header with jwt token
  let user: User = JSON.parse(localStorage.getItem('user') || '{}');

  if (user && user.token) {
    return {'Authorization': 'Bearer ' + user.token};
  } else {
    return {};
  }
}