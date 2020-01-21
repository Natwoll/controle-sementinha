import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

import { ListaAlunosComponent } from './pages/lista-alunos/lista-alunos.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';
import { RegisterComponent } from './pages/register/register.component';
import { HistoricoAlunosComponent } from './pages/historico-alunos/historico-alunos.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { VoluntariosComponent } from './pages/voluntarios/voluntarios.component';


const routes: Routes = [
  { path: '', redirectTo: 'pages/login', pathMatch: 'full' },
  { path: 'pages/login', component: LoginComponent },
  { path: 'pages/register', component: RegisterComponent },
  { path: 'pages/cadastro-aluno', component: CadastroAlunoComponent, canActivate: [AuthGuard] },
  { path: 'pages/lista-alunos', component: ListaAlunosComponent, canActivate: [AuthGuard] },
  { path: 'pages/historico-alunos', component: HistoricoAlunosComponent, canActivate: [AuthGuard] },
  { path: 'pages/calendario', component: CalendarioComponent, canActivate: [AuthGuard] },
  { path: 'pages/voluntarios', component: VoluntariosComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
