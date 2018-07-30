import { Component, OnInit } from '@angular/core';

import { Signup } from './../domain-models/signup';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }
  form: Signup;
  ngOnInit() {
    this.form = new Signup();
  }

  submit() {
    console.log(this.form);
  }
}

// Testing Commit
// test
// Test SSH
