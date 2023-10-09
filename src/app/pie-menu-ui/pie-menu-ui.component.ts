import {Component} from '@angular/core';
import {PieMenuService} from '../core/services/pieMenu/pie-menu.service';

@Component({
  selector: 'app-pie-menu-ui',
  templateUrl: './pie-menu-ui.component.html',
  styleUrls: ['./pie-menu-ui.component.scss'],
  providers: [PieMenuService]
})
export class PieMenuUIComponent {
  x = 0;
  y = 0;
  display = false;
  constructor() {}

  mouseEnter(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
    this.display = true;
  }

  mouseLeave() {
    this.display = false;
  }
}
