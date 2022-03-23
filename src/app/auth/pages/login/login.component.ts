import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailPattern } from 'src/app/shared/validator/validations';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup = this.fb.group({
    email: ['testalb2@test.com', [ Validators.required, Validators.pattern( emailPattern )]],
    password: ['123456', [ Validators.required, Validators.minLength(6)]]
  });

  hide = true

  constructor( private fb: FormBuilder,
               private router: Router,
               private authservice: AuthService ) { }

  ngOnInit(): void {
  }

  login() {
    //console.log(this.loginForm.value)
    //console.log(this.loginForm.valid)

    const { email, password } = this.loginForm.value

    this.authservice.login( email, password )
      .subscribe( resp => {
        console.log(resp)
      })

    //this.router.navigateByUrl('/dashboard')
  }

}
