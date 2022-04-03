import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { ProtectedService } from '../../services/protected.service';
import { Product } from '../../../customers/interfaces/products.interface';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styles: [
  ]
})
export class CreateProductsComponent implements OnInit {

  previewProduct!: Product

  createProductForm: FormGroup = this.fb.group({
    name: ['Papitas super sabrosas', [ Validators.required ]],
    description: ['desde la app', [ Validators.required ]],
    ingredients: this.fb.array([], Validators.required ),
    image: ['https://i.blogs.es/cd7416/pexels-photo-1583884/1366_2000.jpg', [ Validators.required ]],
    units: [''],
    weight: ['',],
  })

  newIngredient : FormControl = this.fb.control('', Validators.required)

  get ingredientsArray() {
    return this.createProductForm.get('ingredients') as FormArray
  }

  constructor( private fb: FormBuilder,
               private saveProductService: ProtectedService ) { }


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

  submit() {
    this.saveProductService.saveProduct( this.createProductForm.value )
      //.subscribe( resp => console.log('holita', resp))
      .subscribe( product => this.previewProduct = product )
  }

}
