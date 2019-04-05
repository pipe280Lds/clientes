import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Header} from "../../utilities/index.class";

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  params: Header;

  text: string;

  constructor(public navCtrl: NavController, public  navParams: NavParams) {
    this.params = this.navParams.data;
    //console.log(this.params);
  }

  onBackClick() {
    this.navCtrl.setRoot(this.params.backPage).then();
  }

}
