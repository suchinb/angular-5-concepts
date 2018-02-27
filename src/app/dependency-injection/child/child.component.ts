import { Component, OnInit } from '@angular/core';

import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-child',
  template: `
    <p>
      Child: {{simpleService.value}}
    </p>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  constructor(private simpleService:SimpleService) { }

  ngOnInit() {
  }

}
