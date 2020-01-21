import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Voluntary } from '../../models/voluntary.models'

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class VoluntaryService {

  constructor(private http: HttpClient) { }

  getAllVoluntaries() {
    return this.http.get(environment.apiUrl + '/voluntaries')
  }

  createVoluntary(voluntary: Voluntary) {
    return this.http.post(environment.apiUrl + '/voluntaries', voluntary)
  }

  deleteVoluntary(voluntaryId: number) {
    return this.http.delete(environment.apiUrl + `/voluntaries/${voluntaryId}`)
  }
}
