import { Directive, HostListener, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({ selector: '[showSnackbarOnClick]' })
export class SnackBarDirective {
  constructor(private _matSnackBar: MatSnackBar) {}
  @Input() showSnackbarOnClick: string = '';
  @HostListener('click')
  handleClick() {
    this._matSnackBar.open(this.showSnackbarOnClick);
  }
}
