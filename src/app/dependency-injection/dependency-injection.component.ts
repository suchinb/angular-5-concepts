import { Component} from '@angular/core';

import {  SimpleService } from './simple.service'

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent{

  constructor(private simpleService:SimpleService) { }

}
