import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CreateOrdersComponent } from './pages/create-orders/create-orders.component';
import { ShowMenusComponent } from './pages/show-menus/show-menus.component';
import { ShowProductsComponent } from './pages/show-products/show-products.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'pedidos',
        component: CreateOrdersComponent
      },
      {
        path: 'menus',
        component: ShowMenusComponent
      },
      {
        path: 'productos',
        component: ShowProductsComponent
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
