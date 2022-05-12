import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-info-route',
  templateUrl: './info-route.component.html',
  styleUrls: ['./info-route.component.css']
})
export class InfoRouteComponent {

  public target: string = ''
  public kilometers?: number
  public duration?: number

  constructor(
    private mapService: MapService
  ) {
  }

  showRouteDetails() {
    this.target = this.mapService.userMarkerLocation
    this.kilometers = this.mapService.userMarkerDistance
    this.duration = this.mapService.userMarkerDuration
  }

}
