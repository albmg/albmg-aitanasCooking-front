import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern } from 'src/app/shared/validator/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  hide = false

  registerForm: FormGroup = this.fb.group({
    username:['', [ Validators.required ]],
    email:['', [ Validators.required, Validators.pattern( emailPattern )]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
    repeatPassword: ['', [ Validators.required, Validators.minLength(6)]]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  signup() {
      console.log(this.registerForm.value)
      console.log(this.registerForm.valid)
    }
  }


