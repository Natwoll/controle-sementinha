import { Component, OnInit } from '@angular/core';

import { StudentService } from '../../services/student/student.service'
import { Student } from 'src/app/models/student.models';
import { HistoryService } from 'src/app/services/history/history.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.scss']
})
export class ListaAlunosComponent implements OnInit {

  searchInput: string;
  alunos: Array<Student> = [];  //Receberá a lista de alunos cadastrados no dia

  constructor(
    private studentService: StudentService,
    private historyService: HistoryService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe((students: Array<Student>) => {
      this.alunos = students
      console.log(students)
    })
  }

  public releaseAluno(student: Student): void {
    enum alunoStatus { liberado = 'Liberado', aguardando = 'Aguardando' };

    student.departure = new Date()
    student.released = !student.released

    this.studentService.updateStudent(student).subscribe((studentResponse: Student) => student = studentResponse)

    const index = this.alunos.indexOf(student)

    this.alunos[index] = student
  }

  endEvent() {
    const userId = this.loginService.currentUserValue.id.toString()

    this.historyService.createHistory(userId).subscribe(history => {
      window.location.reload() //Recarregando a página após rotina de gravação de histórico
    })
  }
}
