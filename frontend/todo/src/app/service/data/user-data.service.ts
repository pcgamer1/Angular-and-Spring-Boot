import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/signup/signup.component';
import { JPA_API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post<User>(`${JPA_API_URL}/users`, user);
  }
}
