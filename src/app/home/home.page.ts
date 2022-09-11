import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicRestService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
  ) {}

  onClickAddEmployee() {
    this.navCtrl.navigateForward(['add-employee-page']);
  }

  onClickGetEmployee() {
    this.navCtrl.navigateForward(['employee-details-page']);
  }
}
