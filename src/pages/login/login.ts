import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
onRegistro(){
this.navCtrl.push(RegistroPage);

}
showPrompt() {
  const prompt = this.alertCtrl.create({
    title: 'Restablecer Contraseña',
    message: "Ingresa tu correo para recuperar tu contraseña",
    inputs: [
      {
        name: 'olpass',
        placeholder: 'Correo'
      },
    ],
    buttons: [
      {
        text: 'Cancelar'
      },
      {
        text: 'Enviar',
        handler: data => {
          this.onenviar(data)
        }
      }
    ]
  });
  prompt.present();
}
onenviar(data){
console.log(data);
}
onMenu(){
  this.navCtrl.setRoot(MenuPage);
  
  }
}
