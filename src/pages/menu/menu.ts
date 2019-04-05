import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuProvider } from "../../providers/menu/menu";
import {Menu, MenuItemClick} from "../../utilities/index.class";
import { Header } from '../../utilities/interfaces/Header';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements MenuItemClick{

  menuItems: Menu[];
  params: Header;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _menu: MenuProvider) {
    this.menuItems = this._menu.menuItems;

  }
  onMenuItemClick(e) {
    console.log(e);
    this.params =  {
      'title': e.page.title,
      'color': e.page.color,
      'backPage': MenuPage
    };

    //console.log(this.params);
  
   this.navCtrl.setRoot(e.page.page, this.params).then()
  }
}

