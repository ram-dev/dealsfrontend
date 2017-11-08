import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NbAuthService, NbAuthJWTToken } from '../../../auth';


@Component({
  selector: 'ngx-header-public-top',
  styleUrls: ['./header-public-top.component.scss'],
  templateUrl: './header-public-top.component.html',
})
export class HeaderPublicTopComponent implements OnInit {


  @Input() position: string = 'normal';

  user: any;

  userMenu = [{ title: 'Log out' ,link:"/auth/logout"}];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService) {

  }

  ngOnInit() {
    
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
