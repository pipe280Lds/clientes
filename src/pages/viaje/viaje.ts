import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { Viaje2Page } from '../viaje2/viaje2';


/**
 * Generated class for the ViajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-viaje',
  templateUrl: 'viaje.html',
})
export class ViajePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajePage');
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'El precio de tu servicio es:',
      message: '50.000',
      buttons: [
        {
          text: 'Volver',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Solicitar',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}

