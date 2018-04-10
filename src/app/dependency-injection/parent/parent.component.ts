import { Component, OnInit } from '@angular/core';

import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-parent',
  template: `  <p>Parent  </p>
    <input class="form-control" [(ngModel)]="simpleService.value">
    <app-child></app-child>
  `,
  providers:[SimpleService]
})
export class ParentComponent implements OnInit {
  constructor(public simpleService:SimpleService) { }
  
  ngOnInit() {
  }

}
