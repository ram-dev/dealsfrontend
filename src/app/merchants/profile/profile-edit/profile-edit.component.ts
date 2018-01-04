import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { getDeepFromObject } from '../../helpers';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-profile-edit',
  templateUrl: './profile-edit.component.html',  
  styleUrls: ['./profile-edit.component.scss']  
})
export class ProfileEditComponent {  
  genders = ['Male', 'Female', 'N/A'];  
  profileForm: FormGroup;
  user : any;
  id: any;
  showMessages: any = {};  
  submitted = false;
  errors: string[] = [];
  messages: string[] = [];

  constructor(private userService : UserService) {
    this.user = {};
  }

  ngOnInit() {
     this.profileForm = new FormGroup({      
      'username': new FormControl(null, [Validators.required,  Validators.email ]),      
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'gender': new FormControl('Male', [Validators.required]),
      'birthDate': new FormControl(null, [Validators.required]),
      'contacts': new FormGroup({    
        'address': new FormControl(null, [Validators.required]),
        'zip': new FormControl(null, [Validators.required]),
        'city': new FormControl(null, [Validators.required]),
        'state': new FormControl(null, [Validators.required]),
        'country': new FormControl(null, [Validators.required]),
        'locality': new FormControl(null, [Validators.required]),
        'phone1': new FormControl(null, [Validators.required]), 
        'phone2': new FormControl(null, [Validators.required]),        
      }),
    });
    this.userService.getCurrentUser()
      .subscribe(
        data => {
          this.id = data._id;
          var obj : any = {};
          obj.username = data.username;
          obj.firstName = data.firstName;
          obj.lastName = data.lastName;
          obj.gender = data.gender  || this.genders[0];
          obj.birthDate = data.birthDate || '';
          //"2010-12-12";
          obj.contacts = {};
          obj.contacts.address = data.contacts.address || '';
          obj.contacts.zip = data.contacts.zip || '';
          obj.contacts.city = data.contacts.city || '';
          obj.contacts.state = data.contacts.state || '';
          obj.contacts.country = data.contacts.country || '';
          obj.contacts.locality = data.contacts.locality || '';
          obj.contacts.phone1 = data.contacts.phone1 || '';
          obj.contacts.phone2 = data.contacts.phone2 || '';         
          this.user = obj;
          this.initFrom();            
        },
        error => {         
          this.errors.push(error);
        }
      );
    
    
  }
  initFrom (){
    /*this.profileForm.valueChanges.subscribe(
       (value) => console.log(value)
    );
    this.profileForm.statusChanges.subscribe(
      (status) => console.log(status)
    );*/
    this.profileForm.setValue(this.user);
  }
  onSubmit() {
    this.errors = this.messages = [];
    this.submitted = true;
    var formData : any  = {};
    formData = this.profileForm.value;  
    formData.id = this.id;  
    console.log(formData);
    this.userService.update(formData).subscribe((result) =>{
      this.submitted = false;
      console.log('res');
      console.log(result);
    })
    /*this.service.resetPassword(this.provider, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
     
    });*/
    //this.profileForm.reset();
  }

}
