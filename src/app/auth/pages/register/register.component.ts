import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern } from 'src/app/shared/validator/validations';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  hide = true

  registerForm: FormGroup = this.fb.group({
    username:['', [ Validators.required ]],
    email:['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern )]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
    repeatPassword: ['', [ Validators.required ]]
  }, {
    validators: [ this.validatorService.checkPasswords('password', 'repeatPassword')]
  })

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService,
               private validatorService: ValidatorService ) { }

  ngOnInit(): void {
  }

  signup() {
      //console.log(this.registerForm.value)
      //console.log(this.registerForm.valid)

      const { username, email, password } = this.registerForm.value

    this.authService.register( username, email, password )
      .subscribe( ok => {
        //console.log(resp)
        if ( ok  === true ) {
          this.router.navigateByUrl('/dashboard')
        } else {
          //mostrar mensaje de error
          alert('email y/o contraseña erróneos')
        }
      })
    }
  }


