import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CLASS_NAME } from '@angular/flex-layout';
import mapboxgl, { Marker, Popup } from 'mapbox-gl';
import { Map } from 'mapbox-gl';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {


  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  cookingsCenter: [number, number ] = [  -15.444115686379836, 28.0449734484430 ]


  constructor( private placesService: PlacesService) { }

  ngAfterViewInit(): void {

    //if ( !this.placesService.userLocation ) throw Error('No hay placesService.UserLocation')


    const map = new Map({
     container: this.mapDivElement.nativeElement,
     style: 'mapbox://styles/mapbox/streets-v11', // style URL
     //center: this.placesService.userLocation, // starting position [lng, lat]
     center: [ -15.5, 28.05],
     zoom: 10 // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
      <img src="../assets/logo02.png" width="95%" alt="la-cocina-de-Aitana-logo"/>
      `)


    new Marker({ color: 'green' })
      .setLngLat(this.cookingsCenter)
      .setPopup(popup)
      .addTo(map)

  }



}
