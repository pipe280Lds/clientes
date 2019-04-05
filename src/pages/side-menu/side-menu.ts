import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {MenuItemClick} from "../../utilities/interfaces/MenuItemClick";
import {Menu} from "../../utilities/interfaces/Menu";
import {MenuProvider} from "../../providers/menu/menu";

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuPage implements MenuItemClick {

  @Output() cardClick;
  menuItems: Menu[];

  constructor(private _menu: MenuProvider) {
    this.menuItems = this._menu.menuItems;
    this.cardClick = new EventEmitter();
  }

  onMenuItemClick(page) {
    this.cardClick.emit({page})
  }
}
