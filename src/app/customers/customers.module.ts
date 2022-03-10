import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOrdersComponent } from './pages/create-orders/create-orders.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowProductsComponent } from './pages/show-products/show-products.component';
import { ShowMenusComponent } from './pages/show-menus/show-menus.component';



@NgModule({
  declarations: [
    CreateOrdersComponent,
    HomeComponent,
    ShowProductsComponent,
    ShowMenusComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
