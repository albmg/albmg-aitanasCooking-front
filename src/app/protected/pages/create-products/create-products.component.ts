import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ProtectedService } from '../../services/protected.service';
import { Product } from '../../../customers/interfaces/products.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators'
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

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

  newIngredient: FormControl = this.fb.control('', Validators.required)

  get ingredientsArray() {
    return this.createProductForm.get('ingredients') as FormArray
  }


  constructor( private fb: FormBuilder,
               private saveProductService: ProtectedService,
               private router: Router,
               private snackBar: MatSnackBar,
               private activatedRoute: ActivatedRoute,
               public dialog: MatDialog) { }


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
      this.createProductForm.reset(product)

      for (const ingredientsFromBackend of product.ingredients) {
        this.ingredientsArray.push(this.fb.control(ingredientsFromBackend, Validators.required))
      }

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
      .subscribe(createdProduct => {
        this.showSnackBar(' Producto creado satisfactoriamente ')
        this.router.navigate(['/dashboard/gestionar-productos/editar/', createdProduct._id])
      })
  }

  updateProduct() {
    this.saveProductService.upgradeProduct( this.product._id, this.createProductForm.value )
      .subscribe( updatedProduct => {
        this.showSnackBar(' Producto actualizado satisfactoriamente ')
        this.router.navigate(['/dashboard/gestionar-productos'])
      })
  }

  removeProduct() {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: this.product
    })

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.saveProductService.deleteProduct(this.product._id)
            .subscribe(resp => {
              console.log(resp)
            })
        }
      }
    )
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
