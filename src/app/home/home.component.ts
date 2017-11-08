import { Component } from '@angular/core';

import { MENU_ITEMS } from './home-menu';

@Component({
  selector: 'ngx-home',
  template: `
    <ngx-home-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-home-layout>
  `,
})
export class HomeComponent {
  menu = MENU_ITEMS;
}
