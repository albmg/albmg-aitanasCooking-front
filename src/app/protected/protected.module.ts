import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    ProtectedRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
