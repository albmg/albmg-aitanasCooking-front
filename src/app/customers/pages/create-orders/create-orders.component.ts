import { Component, DoCheck, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomersService } from '../../services/customers.service';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { ProtectedService } from '../../../protected/services/protected.service';

import { Order } from '../../interfaces/orders.interface';

import { MatDialog } from '@angular/material/dialog';

import { MapScreenComponent } from '../../../maps/screens/map-screen/map-screen.component';

import { MapService } from '../../../maps/services/map.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateOrdersComponent implements OnInit, DoCheck  {

  orders!: Order[]

  availableOrderDate!: Date

  days: number = 4

  purchasedProductsWithQty: any[] = []

  purchasedMenusWithQty: any[] = []


  createOrderForm: FormGroup = this.fb.group({
    clientName: ['', [ Validators.required ]],
    email: ['', [ Validators.required, Validators.pattern( this.vs.emailPattern )]],
    adress: [ '' , [ Validators.required ]],
    phone: ['', [ Validators.required ]],
    purchasedProducts: [this.purchasedProductsWithQty],
    purchasedMenus: [this.purchasedMenusWithQty],
    deliveryDate: ['' , [Validators.required]],
    deliveryTime: ['', [Validators.required, Validators.min(12), Validators.max(19)]],
    distance: [],
    duration: []
  }, { validators: this.vs.checkPurchasing })

  constructor(
    private customerService: CustomersService,
    private manageOrder: ProtectedService,
    private mapService: MapService,
    private vs: ValidatorService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.manageOrder.viewAllOrders()
      .subscribe(orders => this.orders = orders)

    // calculate initial date
    this.availableOrderDate = new Date(Date.now() + this.days * 24 * 60 * 60 * 1000)

    //save products with quantity
    this.cartService.productCart.forEach(m => {
      this.purchasedProductsWithQty.push(
        {
          productId: m._id,
          quantity: m.defaultUnits
        })
    })

    //save menus with quantity
    this.cartService.menuCart.forEach(m => {
      this.purchasedMenusWithQty.push(
        {
          menuId: m._id,
          quantity: m.defaultUnits
        })
    })

  }

  get userLocation(): boolean {
    return !!this.mapService.userMarkerLocation
  }

  get totalPriceFromCart() {
     return this.cartService.totalProductPrice + this.cartService.totalMenuPrice
  }

  get productsFromCart() {
    return this.cartService.productCart
  }

  get menusFromCart() {
    return this.cartService.menuCart
  }

  ngDoCheck(): void {
    this.createOrderForm.patchValue(
      {
        adress: this.mapService.userMarkerLocation,
        distance: this.mapService.userMarkerDistance,
        duration: this.mapService.userMarkerDuration
      })

  }

  submit() {
    this.customerService.saveOrder( this.createOrderForm.value )
      .subscribe( resp => {
        console.log('Respuesta', resp)
      })
  }

  myUnavailableDayFilter = (d: Date | null): boolean => {

    if( !this.orders ) throw Error('No orders')

    const time = d?.getTime();

    const getDatesFromOrders = this.orders.map(m => m.deliveryDate)


    const filterDeliveryDates = getDatesFromOrders.filter((item, index) => getDatesFromOrders.indexOf(item) != index).map(date => new Date(date))

    // check duplicates dates
    const myUnavailableDates = [...new Set(filterDeliveryDates)]

    //disable these days on date picker
    return !myUnavailableDates.find(x=>x.getTime()==time);
  }

  showMapDialog() {
    this.dialog.open(MapScreenComponent, {
      width: '500px',
    })
  }

}
