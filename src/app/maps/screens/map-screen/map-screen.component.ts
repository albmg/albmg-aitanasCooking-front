import { Component } from '@angular/core';
import { PlacesService } from '../../services';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent {

  constructor(private placesService: PlacesService,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) { }

  /* get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  } */

  get isCookingLocationReady() {
    return this.placesService.isCookingLocationReady
  }

  closeDialogMap() {
    this.dialogRef.close()
  }

}
