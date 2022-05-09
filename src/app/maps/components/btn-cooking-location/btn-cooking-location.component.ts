import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';


@Component({
  selector: 'app-btn-cooking-location',
  templateUrl: './btn-cooking-location.component.html',
  styleUrls: ['./btn-cooking-location.component.css']
})
export class BtnCookingLocationComponent {

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) { }

  goToCookingLocation() {

    if ( !this.placesService.cookingsLocation ) throw Error('No hay ubicación del negocio')
    if ( !this.mapService.isMapReady ) throw Error('No hay mapa disponible')

    this.mapService.flyTo( this.placesService.cookingsLocation )

  }

}
