import { Injectable, } from '@angular/core';

import { CanActivate,Router } from '@angular/router';

import { UserServiceService } from './user-service.service';

@Injectable()
export class OnlyLoggedInGaurdService implements CanActivate{

  constructor(private userService:UserServiceService, private router:Router) { }

  canActivate(){
    console.log("Authenticating Via OnlyLoggedInGaurdService")
    if (this.userService.isLoggedIn()) {
      return true
    }
    else{
      window.alert("Only Logged in users can access")
      this.router.navigate(['overview'])
      return false
    }
  }

}
