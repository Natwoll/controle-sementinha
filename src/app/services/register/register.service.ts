import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import User from '../../models/user.models'

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  register(user: User) {
    return this.http.post(environment.apiUrl + '/users', user)
  }

  getAllUsers() {
    return this.http.get(environment.apiUrl + '/users')
  }
}
