import { Directive } from '@angular/core';
import { NG_VALIDATORS,FormControl } from '@angular/forms';

function emailDomainValidator( control: FormControl ) {
  let email= control.value;
  if (email && email.indexOf('@') != -1) {
    let [_,domain] = email.split("@")
    if (domain!=="gmail.com") {
      return {
        emailDomain:{
          parsedDomain:domain
        }
      }
    }
  }
  else{
    return null
  }
}

@Directive({
  selector: '[emailDomain][ngModel]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useValue:emailDomainValidator,
      multi:true
    }
  ]
})
export class EmailDomainValidatorDirective {

  constructor() { }

}
