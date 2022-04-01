import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProtectedService } from '../../services/protected.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styles: [
  ]
})
export class CreateProductsComponent implements OnInit {


  createProductForm: FormGroup = this.fb.group({
    name: ['Papitas super sabrosas', [ Validators.required ]],
    description: ['desde la app', [ Validators.required ]],
    ingredients: ['["ajo", "agua"]'],
    image: ['https://i.blogs.es/cd7416/pexels-photo-1583884/1366_2000.jpg', [ Validators.required ]],
    units: [''],
    weight: ['',],
  })

  constructor( private fb: FormBuilder,
               private saveProductService: ProtectedService ) { }

  ngOnInit(): void {}

  submit() {
    this.saveProductService.saveProduct( this.createProductForm.value )
      .subscribe( resp => console.log('holita', resp))
  }

}
