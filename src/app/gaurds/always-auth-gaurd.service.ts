import { Injectable } from '@angular/core';
import { CanActivateChild,CanActivate } from '@angular/router';

@Injectable()
export class AlwaysAuthGaurdService implements CanActivateChild, CanActivate{

  canActivateChild(){
    console.log("Authenticated by AlwaysAuthGaurdService for child components")
    return true
  }
  canActivate(){
    console.log("Authenticated by AlwaysAuthGaurdService")
    return true
  }
}
