import { Component, OnInit } from '@angular/core';

import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-parent',
  template: `  <p>Parent  </p>
    <input class="form-control" [(ngModel)]="simpleService.value">
    <app-child></app-child>
  `,
  styles: [],
  providers:[SimpleService]
})
export class ParentComponent implements OnInit {
  constructor(private simpleService:SimpleService) { }

  ngOnInit() {
  }

}
