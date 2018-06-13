import { Injectable } from '@angular/core';
import { Observable } from "rxjs/observable";
import {of} from "rxjs/observable/of";

import { environment } from '../../environments/environment';
import { HttpHandlerService } from "../API/http-handler.service";


@Injectable()
export class LoginService {
  // private httpHandler:HttpHandlerService,
  constructor() { }

  
  redirectToSSO() {
    let si=JSON.parse(localStorage.getItem('si'))
    let spa=encodeURIComponent('http://localhost:4200/auth')
    window.location.href='https://'+si.identityUrl+'/CommonReg/secured?cmd=JWTAUTHENTICATE&SPA_URI='+spa
  }
}
