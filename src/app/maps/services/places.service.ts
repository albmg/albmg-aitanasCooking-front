import { Injectable } from '@angular/core';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  userLocation?: [number, number]

  get isUserLocationReady(): boolean {
    return !!this.userLocation
  }

  constructor() {
    this.getUserLocation()
  }

  getUserLocation(): Promise<[number, number]>{

    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude]
          resolve( this.userLocation )
        },
        (err) => {
          alert('No se pudo obtener la geolocalización')
          console.log(err)
          reject()
        }
      )
    })
  }
}
