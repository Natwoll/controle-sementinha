import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import User from '../../models/user.models';
import LoginResponse from '../../models/login.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  login(username, password): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>('http://64.225.46.4:3333/login', { username, password }).pipe(map(response => {
      const user = response.user[0]

      if(!user || !response.success)
        return response
      console.log('a')
      sessionStorage.setItem('currentUser', JSON.stringify(user))
      this.currentUserSubject.next(user)
      return response
    }))
  }

  logout() {
    sessionStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
  }
}
