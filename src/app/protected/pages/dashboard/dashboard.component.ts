import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {


  minimizedProducts: boolean = false

  minimizedStats: boolean = false

  minimizePanelProduct() {
    this.minimizedProducts = true
  }

  maximizePanelProduct() {
    this.minimizedProducts = false
  }

  minimizeStatsPanel() {
    this.minimizedStats = true
  }

  maximizeStatsPanel() {
    this.minimizedStats = false
  }

}
