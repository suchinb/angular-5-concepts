import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, Router } from '@angular/router';

import { UserServiceService } from "../gaurds/user-service.service";

@Injectable()
export class AuthResolveService implements Resolve<any>{

  constructor(private user:UserServiceService, private router:Router) { }

  resolve(route:ActivatedRouteSnapshot){
    let userId=route.queryParams.cuid
    localStorage.setItem('userId',userId)
    localStorage.setItem('xt',route.queryParams.xsrfToken)
    if (!this.user.user) {
      return this.user.getPersonDetails(userId)
    }
  }

}
