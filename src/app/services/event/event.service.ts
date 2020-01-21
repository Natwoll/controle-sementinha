import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../../environments/environment'
import { Event } from 'src/app/models/event.models';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getAllEvents() {
    return this.http.get(environment.apiUrl + '/events')
  }

  createEvent(event: Event) {
    return this.http.post(environment.apiUrl + '/events', event)
  }
}
