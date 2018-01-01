import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './models/user.model';

import { ApiService } from './api.service';

let counter = 0;

@Injectable()
export class UserService {

  constructor(
      private apiService: ApiService,
    ) 
  {
    
  }

  getCurrentUser(): Observable<any> {
    return this.apiService.get('user')
      .map((res) => res);
  }
 
}
