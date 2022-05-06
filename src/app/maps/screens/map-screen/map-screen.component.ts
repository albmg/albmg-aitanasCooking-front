import { Component } from '@angular/core';
import { PlacesService } from '../../services';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent {

  constructor(private placesService: PlacesService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) { }

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }

  closeDialogMap() {
    this.dialogRef.close()
  }

}
