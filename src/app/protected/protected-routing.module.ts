import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateProductsComponent } from './pages/create-products/create-products.component';
import { CreateMenusComponent } from './pages/create-menus/create-menus.component';
import { ManageOrdersComponent } from './pages/manage-orders/manage-orders.component';

const routes: Routes = [
  {
    path: '',
    //component: DashboardComponent,
    children: [
      {
        path: 'gestionar',
        component: DashboardComponent
      },
      {
        path: 'gestionar-productos',
        component: CreateProductsComponent
      },
      {
        path: 'gestionar-productos/:id',
        component: CreateProductsComponent
      },
      {
        path: 'gestionar-menus',
        component: CreateMenusComponent
      },
      {
        path: 'gestionar-pedidos',
        component: ManageOrdersComponent
      },
      {
        path: '',
        redirectTo: 'gestionar'
      },
      /* {
        path:'**',
        component: DashboardComponent
      } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
