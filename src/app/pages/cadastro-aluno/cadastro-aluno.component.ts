import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

import { StudentService } from '../../services/student/student.service'
import { Student } from 'src/app/models/student.models';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss']
})
export class CadastroAlunoComponent implements OnInit {
  studentForm: FormGroup
  student: Student

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {
    this.student = new Student()
  }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      sponsor: ['', Validators.required]
    });
  }

  public get f() {
    return this.studentForm.controls
  }

  selectClass(value: string) {
    this.student.class = value
  }

  handleCreateStudent(formDirective: FormGroupDirective) {
    this.student.name = this.f.name.value
    this.student.age = this.f.age.value
    this.student.sponsor = this.f.sponsor.value
    this.student.released = false
    this.student.entry = new Date()

    this.studentService.createStudent(this.student).subscribe((student: Student) => this.student = student)
    formDirective.resetForm()
    this.studentForm.reset()
  }
}
