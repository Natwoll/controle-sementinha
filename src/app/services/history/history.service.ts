import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private http: HttpClient
  ) { }

  getHistory() {
    return this.http.get(environment.apiUrl + '/history')
  }

  createHistory(userId: string) {
    const headers = new HttpHeaders({
      'user_id': userId
    })

    const options = { headers }

    return this.http.post(environment.apiUrl + '/history', null, options)
  }
}
