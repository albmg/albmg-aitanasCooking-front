import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }

  checkPasswords( param1: string, param2: string) {

    return ( formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(param1)?.value
      const pass2 = formGroup.get(param2)?.value

      if ( pass1 !== pass2 ) {
        formGroup.get(param2)?.setErrors({ noIguales: true })
        return { noIguales: true }
      }

      formGroup.get(param2)?.setErrors( null )

      return null
    }
  }
}
