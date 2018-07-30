import { Component, OnInit } from '@angular/core';

import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-child',
  template: `
    <p>
      Child: {{ simpleService.value }}
    </p>
  `
})
export class ChildComponent implements OnInit {

  constructor(public simpleService: SimpleService) { }

  ngOnInit() {
  }

}
