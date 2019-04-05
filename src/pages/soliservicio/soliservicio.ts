import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViajePage } from '../viaje/viaje';

/**
 * Generated class for the SoliservicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-soliservicio',
  templateUrl: 'soliservicio.html',
})
export class SoliservicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  onTown(value: String){
    this.navCtrl.setRoot(ViajePage);
  }

}
