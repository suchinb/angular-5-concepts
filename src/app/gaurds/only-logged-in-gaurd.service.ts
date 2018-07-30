import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CanActivate, Router } from '@angular/router';

import { UserServiceService } from '../gaurds/user-service.service';

@Injectable()
export class OnlyLoggedInGaurdService implements CanActivate {

  constructor(private userService: UserServiceService, private router: Router) { }

  canActivate(): Observable<boolean> {
    console.log('Authenticating Via OnlyLoggedInGaurdService');
    return this.userService.isLoggedIn();
    // if (this.loginSErvice.isLoggedIn()) {
    //   return true
    // }
    // else{
    //   window.alert('Only Logged in users can access')
    //   this.router.navigate(['overview'])
    //   return false
    // }
  }

}
