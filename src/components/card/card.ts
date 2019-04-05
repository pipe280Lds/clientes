import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Menu } from "../../utilities/index.class";

@Component({
  selector: 'card',
  templateUrl: 'card.html',
})

export class CardComponent {

  @Input() menuItem: Menu;

  @Output() cardClick;

  constructor() {
    this.cardClick = new EventEmitter()
  }

  onCardClick(page) {
    this.cardClick.emit({page})
  }
}

