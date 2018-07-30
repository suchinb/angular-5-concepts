import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  template: `
      `,
  styles: []
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl(localStorage.getItem('appRedirect'));
  }

}
