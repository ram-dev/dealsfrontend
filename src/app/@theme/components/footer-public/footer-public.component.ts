import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer-public',
  styleUrls: ['./footer-public.component.scss'],
  template: `
    <span class="created-by">Copyright @ <b><a href="#" target="_blank">yofferz.com</a></b> 2017</span>
    <div class="footer-nav">
      <a href="#" target="_blank">About us</a>
      <a href="#" target="_blank">Contact us</a>
      <a href="#" target="_blank">Terms & Conditions</a>
      <a href="#" target="_blank">Privacy Policy</a>      
    </div>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-google"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>      
    </div>
  `,
})
export class FooterPublicComponent {
}
