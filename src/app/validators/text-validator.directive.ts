import { Directive, Input, OnChanges, SimpleChanges, ElementRef, HostListener } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function textValidator(textRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = textRe.test(control.value);
    return !value ? {'textValidator': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appTextValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: TextValidatorDirective, multi: true}]
})
export class TextValidatorDirective implements Validator {
  @Input('appTextValidator') textValidator: string;
  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.textValidator ? textValidator(new RegExp(this.textValidator, 'i'))(control) : null;
  }
}
