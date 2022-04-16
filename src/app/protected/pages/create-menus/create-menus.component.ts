import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../../../customers/interfaces/menus.interface';
import { ProtectedService } from '../../services/protected.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { Product } from '../../../customers/interfaces/products.interface';
import { CustomersService } from '../../../customers/services/customers.service';
import { switchMap } from 'rxjs/operators'




@Component({
  selector: 'app-create-menus',
  templateUrl: './create-menus.component.html',
  styles: [
    `
    .form-control {
      color: purple
    }
    `
  ]
})
export class CreateMenusComponent implements OnInit {


  menu!: Menu

  dishesList!: Product[]

  createdMenu!: Menu

  createMenuForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    description: ['', [ Validators.required ]],
    dishes: this.fb.array([], Validators.required ),
    image: ['a', [ Validators.required ]],
    number: [''],
    diners: ['',],
  })

  newDish: FormControl = this.fb.control('', Validators.required)

  get dishesArray() {
    return this.createMenuForm.get('dishes') as FormArray
  }

  constructor( private fb: FormBuilder,
               private saveMenuService: ProtectedService,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private snackBar: MatSnackBar,
               public dialog: MatDialog,
               private getAllProductsService: CustomersService) { }

  ngOnInit(): void {

    this.getAllProductsService.getProducts()
      .subscribe(products => {
        this.dishesList = products
      })

    if( !this.router.url.includes('/editar')) {
      return;
    }


    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.saveMenuService.getMenutById(id))
    )
    .subscribe( menu => {
      this.menu = menu
      this.createMenuForm.reset(menu)

      for (const dishesFromBackend of menu.dishes) {
        this.dishesArray.push(this.fb.control(dishesFromBackend._id, Validators.required))
      }

    })
  }

  addDish() {

    const repeatedProduct = this.dishesList.filter(m => m._id === this.newDish.value).map(m => m.name)

    if ( this.newDish.invalid ) {
      return
    }

    if (this.dishesArray.value.includes(this.newDish.value)) {

      return alert(`${ repeatedProduct } ya ha sido añadido`)
    }

    this.dishesArray.push(this.fb.control(this.newDish.value, Validators.required))

    this.newDish.reset()

  }

  removeDish( i: number ) {
    this.dishesArray.removeAt(i)
  }

  saveMenu() {
    this.saveMenuService.saveMenu( this.createMenuForm.value )
      .subscribe(createdMenu => {
        this.showSnackBar(' Menu creado satisfactoriamente ')
        this.router.navigate(['/dashboard/gestionar-productos/editar/', createdMenu._id])
      })
  }

  updateMenu() {
    this.saveMenuService.upgradeMenu( this.menu._id, this.createMenuForm.value )
      .subscribe( updatedMenu => {
        this.showSnackBar(' Menu actualizado satisfactoriamente ')
        //this.router.navigate(['/dashboard/gestionar-menus'])
      })
  }

  removeMenu() {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: this.menu
    })

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.saveMenuService.deleteMenu(this.menu._id)
            .subscribe(resp => {
              console.log(resp)
            })
        }
      }
    )
  }

  addImage(imagen: string ) {
    this.createMenuForm.patchValue({
      image: imagen
      })
  }

  showSnackBar( message: string ) {
    this.snackBar.open( message, 'cerrar', {
      duration: 2500
    })
  }



}
