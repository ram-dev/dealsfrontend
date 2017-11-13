import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/merchants/dashboard',
    home: true,
  },  
  {
    title: 'Merchant',
    icon: 'nb-person',
    link: '/merchants/merchant/tabs',
    
  },
  {
    title: 'My Deals',
    icon: 'ion-ios-briefcase-outline',
    link: '/merchants/deals/list'  
  },
  {
    title: 'Download Deal',
    icon: 'ion-ios-download-outline',
    link: '/merchants/download/smart-table'    
  },
  {
    title: 'Settings',
    icon: 'nb-gear',
    children: [
      {
        title: 'Profile',
        link: '/merchants/profile/edit/',
      },
      {
        title: 'Change Password',
        link: '/merchants/profile/changepwd/',
      }
    ],
  },  
  {
    title: 'Add Money',
    icon :'nb-plus-circled'
  },
  /*{
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];
