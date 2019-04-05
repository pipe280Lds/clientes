import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Menu,Header } from '../../utilities/index.class';
import { MenuProvider } from '../../providers/menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menuItems: Menu[];
  params: Header;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _menu: MenuProvider) {
    this.menuItems = this._menu.menuItems;

  }
  onMenuItemClick(e) {
    this.params =  {
      'title': e.item.title,
      'color': e.item.color,
      'backPage': HomePage
    };

    //console.log(this.params);

    this.navCtrl.setRoot(e.item.page, this.params).then()
  }
}
