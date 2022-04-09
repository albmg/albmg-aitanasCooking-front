import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ProtectedService } from '../../services/protected.service';
import { Product } from '../../../customers/interfaces/products.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styles: [
  ]
})

export class CreateProductsComponent implements OnInit {

  product!: Product

  createdProduct!: Product

  createProductForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    description: ['', [ Validators.required ]],
    ingredients: this.fb.array([], Validators.required ),
    image: ['', [ Validators.required ]],
    units: [''],
    weight: ['',],
  })

  newIngredient : FormControl = this.fb.control('', Validators.required)

  get ingredientsArray() {
    return this.createProductForm.get('ingredients') as FormArray
  }

  constructor( private fb: FormBuilder,
               private saveProductService: ProtectedService,
               private router: Router,
               private snackBar: MatSnackBar,
               private activatedRoute: ActivatedRoute ) { }


  ngOnInit(): void {

    if( !this.router.url.includes('/editar')) {
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.saveProductService.getProductById(id))
    )
    .subscribe( product => {
      this.product = product
      console.log(this.product)
    })

  }

  addIngredient() {
    if ( this.newIngredient.invalid) {
      return
    }

    this.ingredientsArray.push( this.fb.control(this.newIngredient.value, Validators.required) )

    this.newIngredient.reset()
  }

  removeIngredient( i: number ) {
    this.ingredientsArray.removeAt(i)
  }


  saveProduct() {
    this.saveProductService.saveProduct( this.createProductForm.value )
      .subscribe( createdProduct => {
        this.showSnackBar(' Producto creado satisfactoriamente ')
        this.router.navigate(['/dashboard/gestionar-productos/editar/', createdProduct._id])
      })
  }

  addImage(imagen: string ) {
    this.createProductForm.patchValue({
      image: imagen
      })
  }

  showSnackBar( message: string ) {
    this.snackBar.open( message, 'cerrar', {
      duration: 2500
    })
  }
}
