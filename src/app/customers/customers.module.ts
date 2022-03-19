import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { CreateOrdersComponent } from './pages/create-orders/create-orders.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowMenusComponent } from './pages/show-menus/show-menus.component';
import { ShowProductsComponent } from './pages/show-products/show-products.component';
import { ShowSingleMenuComponent } from './pages/show-single-menu/show-single-menu.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';



@NgModule({
  declarations: [
    CreateOrdersComponent,
    HomeComponent,
    ShowMenusComponent,
    ShowProductsComponent,
    ShowSingleMenuComponent,
    ProductCardComponent,
    MenuCardComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class CustomersModule { }
