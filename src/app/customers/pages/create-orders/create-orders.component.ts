import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { emailPattern } from 'src/app/shared/validator/validations';
import { Menu } from '../../interfaces/menus.interface';
import { Product } from '../../interfaces/products.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styles: [
    `
    .mat-form-field {
      margin: 5px;
    }
    `
  ]
})
export class CreateOrdersComponent implements OnInit {

  products: Product[] = [];

  menus: Menu[] = []

  checkPurchasing: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const prod = control.get('purchasedProducts');
  const menu = control.get('purchasedMenus');

  return prod?.value.length === 0 && menu?.value.length === 0 ? { checkPurchasing: true } : null;
};

  createOrderForm: FormGroup = this.fb.group({
    clientName: ['Claire', [ Validators.required ]],
    email: ['claire@claire.com', [ Validators.required, Validators.pattern( emailPattern )]],
    adress: ['Rue', [ Validators.required ]],
    phone: ['286', [ Validators.required ]],
    purchasedProducts: [[]],
    purchasedMenus: [[]],
    deliveryDate: ['2023/05/12', [ Validators.required ]]
  }, { validators: this.checkPurchasing })

  constructor( private selectProductService: CustomersService,
               private fb: FormBuilder,
               private saveOrderService: CustomersService ) { }

  ngOnInit(): void {

    this.selectProductService.getProducts()
    .subscribe( products => this.products = products )

    this.selectProductService.getMenus()
      .subscribe(menus => this.menus = menus)


    console.log('value del datePicker', this.createOrderForm.value)
  }

  submit() {
    this.saveOrderService.saveOrder( this.createOrderForm.value )
      .subscribe( resp => {
        console.log('Respuesta', resp)
      })
  }

}
