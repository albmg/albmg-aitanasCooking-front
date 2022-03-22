import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailPattern } from 'src/app/shared/validator/validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup = this.fb.group({
    email: ['test@test.com', [ Validators.required, Validators.pattern( emailPattern )]],
    password: ['123456', [ Validators.required, Validators.minLength(6)]]
  });

  hide = true

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value)
    console.log(this.loginForm.valid)
  }

}
