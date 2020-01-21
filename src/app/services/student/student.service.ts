import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {Student, StudentRequest} from 'src/app/models/student.models';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(environment.apiUrl + '/students')
  }

  createStudent(student: Student) {
    return this.http.post(environment.apiUrl + '/students', new StudentRequest(student))
  }

  updateStudent(student: Student) {
    return this.http.put(environment.apiUrl + `/students/${student.id}`, new StudentRequest(student))
  }
}
