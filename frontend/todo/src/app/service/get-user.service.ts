import { Injectable } from '@angular/core';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root',
})
export class GetUserService {
  constructor() {}

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      let token = sessionStorage.getItem(TOKEN);
      return token;
    }
  }

  getAuthenticatedUser() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return user;
  }
}
