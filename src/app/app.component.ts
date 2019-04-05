import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { MenuItemClick } from '../utilities/index.class';
import { Header } from '../utilities/interfaces/Header';
import { MenuPage } from '../pages/menu/menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements MenuItemClick {
  @ViewChild(Nav) nav: Nav;
  params: Header;
  rootPage:any = WelcomePage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onMenuItemClick(e) {

    this.params = {
      'title': e.page.title,
      'color': e.page.color,
      'backPage': MenuPage
    };
    this.nav.setRoot(e.page.page, this.params).then();
  }
}
