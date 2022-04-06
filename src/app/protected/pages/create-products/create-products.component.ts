import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ProtectedService } from '../../services/protected.service';
import { Product } from '../../../customers/interfaces/products.interface';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styles: [
  ]
})

export class CreateProductsComponent implements OnInit {

  previewProduct!: Product

  previewImage: string = ''


  createProductForm: FormGroup = this.fb.group({
    name: ['papas riquisimas', [ Validators.required ]],
    description: ['desde la app', [ Validators.required ]],
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
               private storageService: StorageService ) { }


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
    console.log(this.createProductForm.value)
    this.saveProductService.saveProduct( this.createProductForm.value )
      .subscribe( product => this.previewProduct = product )
  }

  holita() {
    alert(this.previewProduct._id)
  }

   // image picker

   productImages: any[] = [];

   loadImage(event: any) {

     //console.log(event)

     let filePicked = event.target.files;
     let productName = "producto";

     for (let i = 0; i < filePicked.length; i++) {

       let reader = new FileReader();
       reader.readAsDataURL(filePicked[0]);
       reader.onloadend = () => {
         console.log(reader.result);
         this.productImages.push(reader.result);

         this.storageService.uploadImage(productName + "_" + Date.now(), reader.result)
           .then(urlImagen => {
             console.log(urlImagen);
             this.createProductForm.patchValue({
              image: urlImagen
              })
           });
       }
     }
   }

}
