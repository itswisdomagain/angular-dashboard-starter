import { Component } from '@angular/core';
import { getNavItems } from './nav-items';
import { SideBarNavItem } from '../../../interfaces/index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navItems: SideBarNavItem[];
  showMenu = '';
  showSubMenu = '';

  constructor() {
    this.navItems = getNavItems();
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';

    } else {
      this.showMenu = element;
    }
  }

  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';

    } else {
      this.showSubMenu = element;
    }
  }
}
