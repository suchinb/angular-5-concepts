import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent implements OnInit {
  langs:string[]=[
    'English',
    'Kannada',
    'Hindi'
  ]
  myForm:FormGroup
  firstName:FormControl
  lastName:FormControl
  email:FormControl
  password:FormControl
  language:FormControl

  ngOnInit(){
    this.createElements()
    this.createForm()
  }

  createElements () {
    this.firstName= new FormControl("",Validators.required)
    this.lastName =new FormControl("",Validators.required)
    this.email= new FormControl("",[Validators.pattern("[^ @]*@[^ @]*"),Validators.required])
    this.password = new FormControl("",[Validators.required,Validators.minLength(8)])
    this.language= new FormControl()
  }

  createForm () {
    this.myForm = new FormGroup({
      name:new FormGroup({
        firstName: this.firstName,
        lastName:this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    })
  }

  submit() {
    console.log("Form Submitted")
    this.myForm.reset()
  }
}
