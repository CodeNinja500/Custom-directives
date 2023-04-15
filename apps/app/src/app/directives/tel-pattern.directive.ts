import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector:
    '[input[type=tel][formControlName],input[type=tel][formControl],input[type=tel][ngModel]]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TelPatternDirective, multi: true },
  ],
})
export class TelPatternDirective implements Validator {
  @Input() pattern: string | undefined = undefined;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value as String;

    if (value && this.pattern) {
      const pattern: RegExp = new RegExp(this.pattern);
      const isPatternMatched = value.match(pattern) ? true : false;
      return isPatternMatched ? null : { pattern: true };
    }
    return null;
  }
}
