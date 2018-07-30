import { Injectable } from '@angular/core';
import { CanActivateChild, CanActivate, Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AlwaysAuthGaurdService implements CanActivateChild, CanActivate {

  constructor(private router: Router, private route: ActivatedRoute) {}

  canActivateChild() {
    console.log('Authenticated by AlwaysAuthGaurdService for child components');
    return true;
  }
  canActivate() {
    console.log('Authenticated by AlwaysAuthGaurdService');
    if (this.route.snapshot.url) {
      console.log(this.route.snapshot.url);
    }
    return true;
  }
}
