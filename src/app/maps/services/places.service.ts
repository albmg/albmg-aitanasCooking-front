import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  //userLocation?: [number, number]

  cookingsLocation: [number, number ] = [  -15.444115686379836, 28.0449734484430 ]


  /* get isUserLocationReady(): boolean {
    return !!this.userLocation
  } */

  get isCookingLocationReady(): boolean {
    return !!this.cookingsLocation
  }

  constructor() {
    //this.getUserLocation()
  }

 /*  getUserLocation(): Promise<[number, number]>{

    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude]
          resolve( this.userLocation )
        },
        (err) => {
          //alert('No se pudo obtener la geolocalización')
          console.log(err)
          reject()
        }
      )
    })
  } */
}
