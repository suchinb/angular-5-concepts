import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  constructor() { }

  isLoggedIn():boolean{
    return true
  }

}
