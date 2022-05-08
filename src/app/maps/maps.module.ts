import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MaterialModule } from '../material/material.module';
import { BtnCookingLocationComponent } from './components/btn-cooking-location/btn-cooking-location.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnCookingLocationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
