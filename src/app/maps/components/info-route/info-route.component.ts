import { Component, DoCheck } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-info-route',
  templateUrl: './info-route.component.html',
  styleUrls: ['./info-route.component.css']
})
export class InfoRouteComponent implements DoCheck {

  public target: string = ''
  public kilometers?: number
  public duration?: number

  get userMarkerLocation(): boolean {
    return !!this.mapService.userMarkerLocation
  }

  constructor(
    private mapService: MapService
  ) {}

  ngDoCheck(): void {
    this.target = this.mapService.userMarkerLocation
    this.kilometers = this.mapService.userMarkerDistance
    this.duration = this.mapService.userMarkerDuration
  }

}
