import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {
  // private httpHandler:HttpHandlerService,
  constructor() { }

  redirectToSSO() {
    const si = JSON.parse(localStorage.getItem('si'));
    const spa = encodeURIComponent('http://localhost:4200/auth');
    window.location.href = 'https://' + si.identityUrl + '/CommonReg/secured?cmd=JWTAUTHENTICATE&SPA_URI=' + spa;
  }
}
