import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { ServiciosPage } from "../../pages/servicios/servicios";
import { ProfilePage } from "../../pages/profile/profile";
import { Menu } from "../../utilities/index.class";
import { ListaconductoresPage } from '../../pages/listaconductores/listaconductores';
import { SoliservicioPage } from '../../pages/soliservicio/soliservicio';
//import {NavController} from "ionic-angular";
import { ContactPage } from '../../pages/contact/contact';

@Injectable()
export class MenuProvider {

  menuItems: Menu[];

  constructor(public http: HttpClient) {

    /**
     * todo settings for menu and cards
     */
    this.menuItems = [
      {
        page: ListaconductoresPage,
        title: "Lista Conductores",
        content: "Conocelos",
        icon: "ios-contacts",
        color: "primary",
      },
      
      {
        page: SoliservicioPage,
        title: "Solicitar Servicio",
        content: "Comienza Tu Experiencia",
        icon: "ios-car",
        color: "dark"

      },
      {
        page: ProfilePage,
        title: "Perfil",
        content: "Tu Información Personal",
        icon: "ios-person",
        color: "secondary"
      },
      {
        page: ProfilePage,
        title: "Seguimiento",
        content: "Información De Tu Servicio",
        icon: "md-watch",
        color: "danger"
      },
      {
        page: ContactPage,
        title: "Chat",
        content: "Habla Con Tu Conductor",
        icon: "ios-chatbubbles",
        color: "dark"
      },
      {
        page: ProfilePage,
        title: "Habla Con Nosotros",
        content: "Escribenos",
        icon: "ios-create",
        color: "primary"
      },
    ];

    console.log('Hello MenuProvider Provider');
  }


}


