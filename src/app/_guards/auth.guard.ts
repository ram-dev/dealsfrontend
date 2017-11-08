import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NbAuthService, NbTokenService } from '../auth';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private nbAuthService: NbAuthService,private tokenService: NbTokenService) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {        
        return this.nbAuthService.isAuthenticated()
        .map(
          result => {
          console.log("logged-in with result", result);
          if (result){
            return true;
          } else{
            this.router.navigate(['/auth/login']);
          }
          }
        ).catch(() => {
          this.router.navigate(['/auth/login']);
          console.log("not yet logged-in")
          return Observable.of(false);
          })
          
    }
}

