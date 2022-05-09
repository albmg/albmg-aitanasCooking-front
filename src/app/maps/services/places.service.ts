import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../api';

import { MapService } from '.';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  //userLocation?: [number, number]

  cookingsLocation: [number, number] = [-15.444115686379836, 28.0449734484430]

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = []

  get isCookingLocationReady(): boolean {
    return !!this.cookingsLocation
  }

  constructor(
    private placesApi: PlacesApiClient,
    private mapService: MapService
  ) {}

  getPlacesByQuery( query: string = '') {

    if (query.length === 0) {
      this.isLoadingPlaces = false;
      this.places = [];
      return
    }

    if ( !this.cookingsLocation ) throw Error('No hay cookingsLocation')

    this.isLoadingPlaces = true

    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: this.cookingsLocation?.join(',')
      }
    })
      .subscribe(resp => {
        this.isLoadingPlaces = false
        this.places = resp.features

        this.mapService.createMarkersFromPlaces( this.places, this.cookingsLocation! )
      })
  }

  deletePlaces() {
    this.places = [];
  }
}
