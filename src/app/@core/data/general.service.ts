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

@Injectable()
export class GeneralService {
    constructor( private apiService: ApiService ) {

    }
    
    getCityALL(): Observable<any> {
        return this.apiService.getWithoutToken('city')
            .map((res) => res)
            .catch((error) => {
                return error
            }
        );
    }

}
