import { Component } from '@angular/core';
import { LoginService } from './services/login/login.service';
import User from './models/user.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  loggedUser: User

  constructor(
    private loginService: LoginService,
    private router: Router
    ) {
    this.loginService.currentUser.subscribe(user => this.loggedUser = user)
  }

  ngOnInit() {
  }

  public gotoCadastroAluno(): void{
    this.router.navigate(['/pages/cadastro-aluno']);
  }

  public gotoListaAlunos(): void{
    this.router.navigate(['/pages/lista-alunos']);
  }

  public gotoHistoricoAlunos(): void{
    this.router.navigate(['/pages/historico-alunos']);
  }

  public gotoCalendario(): void{
    this.router.navigate(['/pages/calendario']);
  }

  public gotoVoluntarios(): void{
    this.router.navigate(['/pages/voluntarios']);
  }

  public logout(): void {
    this.loginService.logout()
    this.router.navigate(['/pages/login']);
  }
}
