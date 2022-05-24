import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailPattern } from 'src/app/shared/validator/validations';
import { AuthService } from '../../services/auth.service';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup = this.fb.group({
    email: ['testalb2@test.com', [ Validators.required, Validators.pattern( this.validatorService.emailPattern )]],
    password: ['123456', [ Validators.required, Validators.minLength(6)]]
  });

  hide = true

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService,
               private validatorService: ValidatorService ) { }

  ngOnInit(): void {
  }

  login() {
    //console.log(this.loginForm.value)
    //console.log(this.loginForm.valid)

    const { email, password } = this.loginForm.value

    this.authService.login( email, password )
      .subscribe( ok => {
        //console.log(resp)
        if ( ok  === true ) {
          this.router.navigateByUrl('/dashboard')
        } else {
          //mostrar mensaje de error
          alert('email y/o contraseña erróneos')
        }
      })

     /*  this.authservice.validateToken()
        .subscribe(console.log)
 */
  }

}
