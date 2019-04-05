import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {ChatPage} from "../chat/chat";
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  toUser : { toUserId: string, toUserName: string };

  constructor(public navCtrl: NavController) {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Hancock'
    }
  }

  openChat() {
    this.navCtrl.push(ChatPage, this.toUser);
  }

}
