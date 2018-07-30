import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      // console.log(event)
      if (event instanceof NavigationStart) {
        // console.log(event)
        if (event.url.indexOf('/auth') === -1) {
          localStorage.setItem('appRedirect', event.url);
        }
      }
    });
  }
}
