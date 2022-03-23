import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateProductsComponent } from './pages/create-products/create-products.component';
import { CreateMenusComponent } from './pages/create-menus/create-menus.component';
import { ManageOrdersComponent } from './pages/manage-orders/manage-orders.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateProductsComponent,
    CreateMenusComponent,
    ManageOrdersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
