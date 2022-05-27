import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CreateOrdersComponent } from './pages/create-orders/create-orders.component';
import { ShowMenusComponent } from './pages/show-menus/show-menus.component';
import { ShowSingleMenuComponent } from './pages/show-single-menu/show-single-menu.component';
import { ShowProductsComponent } from './pages/show-products/show-products.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'pedidos',
        component: CreateOrdersComponent
      },
      {
        path: 'menus',
        component: ShowMenusComponent
      },
      {
        path: 'menus/:id',
        component: ShowSingleMenuComponent
      },
      {
        path: 'productos',
        component: ShowProductsComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path:'**',
        redirectTo: ''
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class CustomersRoutingModule { }
