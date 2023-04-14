import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector:
    '[input[type=url][formControlName],input[type=url][formControl],input[type=url][ngModel]]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true },
  ],
})
export class UrlValidatorDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value as String;
    if (value) {
      const isStartValid =
        value.startsWith('http://') || value.startsWith('https://')
          ? true
          : false;

      const isEndValid = value.match(/\.[a-z]{2,}$/) ? true : false;

      const error: Record<string, boolean> = {
        mustStartWithHttpOrHttps: isStartValid,
        mustEndWithDotDomain: isEndValid,
      };

      return Object.keys(error).reduce((a, c) => {
        if (error[c]) {
          return { ...a };
        } else {
          return { ...a, [c]: true };
        }
      }, {});
    }
    return null;
  }
}
