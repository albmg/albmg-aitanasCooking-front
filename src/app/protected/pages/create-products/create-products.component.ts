import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ProtectedService } from '../../services/protected.service';
import { Product } from '../../../customers/interfaces/products.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styles: [
  ]
})

export class CreateProductsComponent implements OnInit {

  //@Input () urlImagen: string = ''

  //previewProduct!: Product

  product!: Product

  //previewImage: string = ''


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
               private snackBar: MatSnackBar ) { }


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

  ngOnInit(): void {}

  saveProduct() {
    this.saveProductService.saveProduct( this.createProductForm.value )
      .subscribe( product => {
        this.showSnackBar(' Producto creado satisfactoriamente ')
        this.router.navigate(['/dashboard/gestionar-productos', product._id])
        //this.previewProduct = product
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
