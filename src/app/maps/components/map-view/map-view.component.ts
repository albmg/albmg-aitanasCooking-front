import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) { }

  ngAfterViewInit(): void {

    if ( !this.placesService.cookingsLocation ) throw Error('No hay placesService.CookingLocation')

    const map = new Map({
     container: this.mapDivElement.nativeElement,
     style: 'mapbox://styles/mapbox/streets-v11', // style URL
     center: [ -15.5, 28.05],
     zoom: 10, // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
      <img src="../assets/logo02.png" alt="la-cocina-de-Aitana-logo"/>
      `)


    new Marker({ color: 'green' })
      .setLngLat( this.placesService.cookingsLocation )
      .setPopup(popup)
      .addTo(map)

    this.mapService.setMap( map )

  }



}
