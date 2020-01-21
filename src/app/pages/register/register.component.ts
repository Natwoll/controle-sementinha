import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';
import User from 'src/app/models/user.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  loading = false
  loadingEmail = false
  submitted = false
  emailValid: boolean
  newUser: User
  passwordValid = true

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registerService: RegisterService
  ) {
    this.newUser = new User()
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required]
    });

    this.f.passwordRepeat.valueChanges.subscribe(value => this.onPasswordChange(value))
  }

  get f() { return this.registerForm.controls }

  onSubmit() {
    if(!this.emailValid || !this.passwordValid)
      return;

    this.submitted = true

    if (this.registerForm.invalid)
      return

    this.loading = true

    this.newUser.firstName = this.f.firstName.value
    this.newUser.lastName = this.f.lastName.value
    this.newUser.email = this.f.email.value
    this.newUser.password = this.f.password.value

    this.registerService.register(this.newUser).subscribe(response => {
      alert('Usuário cadastrado com sucesso!')
      this.router.navigate(['/pages/login'])
    })

    this.submitted = false
    this.loading = false

  }

  onEmailBlur(e) {
    const { value: email } = e.target
    this.loadingEmail = true
    this.emailValid = true
    this.registerService.getAllUsers().subscribe((users: Array<User>) => {
      for (let user of users) {
        if (user.email === email)
          this.emailValid = false
        else
          continue
      }
    })
    this.loadingEmail = false
  }

  onPasswordChange(value) {
    if(this.f.password.value !== value)
      this.passwordValid = false
    else
      this.passwordValid = true
  }

  
}
