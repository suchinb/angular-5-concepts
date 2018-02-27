import { Component, OnInit } from '@angular/core';

import { SizerComponent } from './sizer.component';

@Component({
  selector: 'app-custom-two-way-binding',
  templateUrl: './custom-two-way-binding.component.html',
  styleUrls: ['./custom-two-way-binding.component.css']
})
export class CustomTwoWayBindingComponent implements OnInit {

  constructor() { }
   fontSizePx:number=20;
  ngOnInit() {
  }

}
