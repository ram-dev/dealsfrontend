import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { getDeepFromObject } from '../../helpers';

@Component({
  selector: 'ngx-profile-edit',
  templateUrl: './profile-edit.component.html',  
  styleUrls: ['./profile-edit.component.scss']  
})
export class ProfileEditComponent {  
  showMessages: any = {};
  provider: string = '';
  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

 updateProfile(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    /*this.service.resetPassword(this.provider, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
     
    });*/
  }

  getConfigValue(key: string): any {
   // return getDeepFromObject(this.config, key, null);
  }
}
