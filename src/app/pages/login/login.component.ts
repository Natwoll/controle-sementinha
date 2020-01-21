import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {
    if (this.loginService.currentUserValue)
      this.router.navigate(['/pages/lista-alunos'])
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/pages/lista-alunos'
  }

  get f() { return this.loginForm.controls }

  onSubmit() {
    this.submitted = true

    if(this.loginForm.invalid)
      return

    this.loading = true
    this.loginService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(response => {
        this.router.navigate(['/pages/lista-alunos'])
      }
    )

    this.submitted = false
    this.loading = false

  }

}
