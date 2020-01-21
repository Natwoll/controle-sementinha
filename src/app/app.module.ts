import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaAlunosComponent } from './pages/lista-alunos/lista-alunos.component';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HistoricoAlunosComponent } from './pages/historico-alunos/historico-alunos.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*Angular Material*/
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { VoluntariosComponent } from './pages/voluntarios/voluntarios.component';
import { AlunoPesquisaPipe } from './pages/lista-alunos/aluno-pesquisa.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlunosComponent,
    LoginComponent,
    CadastroAlunoComponent,
    RegisterComponent,
    HistoricoAlunosComponent,
    CalendarioComponent,
    VoluntariosComponent,
    AlunoPesquisaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
