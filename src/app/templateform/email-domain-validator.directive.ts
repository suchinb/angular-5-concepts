import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailDomain]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDomainValidatorDirective,
      multi: true
    }
  ]
})
export class EmailDomainValidatorDirective implements Validator {

  @Input() appEmailDomain: string;

  validate(control: FormControl) {
    const email = control.value;
    if (email && email.indexOf('@') !== -1) {
      const [_, domain] = email.split('@');
      if (domain.toLowerCase() !== this.appEmailDomain) {
        return {
          emailDomain: {
            parsedDomain: domain
          }
        };
      }
    } else {
      return null;
    }
  }

}
