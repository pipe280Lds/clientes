import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { WelcomePage } from '../pages/welcome/welcome';
import { MenuPage } from '../pages/menu/menu';
import { CardComponent } from '../components/card/card';
import { ServiciosPage } from '../pages/servicios/servicios';
import { ProfilePage } from '../pages/profile/profile';
import { MenuProvider } from '../providers/menu/menu';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListaconductoresPage } from '../pages/listaconductores/listaconductores';
import { SoliservicioPage } from '../pages/soliservicio/soliservicio';
import { SideMenuPage } from '../pages/side-menu/side-menu';
import { HeaderComponent } from '../components/header/header';
import { ListComponent } from '../components/list/list';
import { PipesModule } from '../pipes/pipes.module';
import { ChatPage } from '../pages/chat/chat';
import { ChatService } from '../providers/chat-service/chat-service';
import { ViajePage } from '../pages/viaje/viaje';
import { Viaje2Page } from '../pages/viaje2/viaje2';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    LoginPage,
    RegistroPage,
    WelcomePage,
    MenuPage,
    CardComponent,
    ServiciosPage,
    ProfilePage,
    ListaconductoresPage,
    SoliservicioPage,
    SideMenuPage,
    HeaderComponent,
    ListComponent,
    ContactPage,
    ChatPage,
    ProfilePage,
    ViajePage,
    Viaje2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    LoginPage,
    RegistroPage,
    WelcomePage,
    MenuPage,
    CardComponent,
    ServiciosPage,
    ProfilePage,
    ListaconductoresPage,
    SoliservicioPage,
    SideMenuPage,
    HeaderComponent,
    ListComponent,
    ContactPage,
    ChatPage,
    ProfilePage,
    ViajePage,
    Viaje2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuProvider,
    ChatService
  ]
})
export class AppModule {}
