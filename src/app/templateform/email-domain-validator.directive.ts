import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS,FormControl,Validator } from '@angular/forms';

@Directive({
  selector: '[emailDomain]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:EmailDomainValidatorDirective,
      multi:true
    }
  ]
})
export class EmailDomainValidatorDirective implements Validator{

   @Input() emailDomain:string;

  validate(control:FormControl){
    let email= control.value;
    if (email && email.indexOf('@') != -1) {
      let [_,domain] = email.split("@")
      if (domain.toLowerCase()!==this.emailDomain) {
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

}
