import { Directive, HostListener, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({ selector: '[showSnackbarOnClick]' })
export class SnackBarDirective {
  constructor(private _matSnackBar: MatSnackBar) {}
  @Input() showSnackbarOnClick: string | null = '';
  @HostListener('click')
  handleClick() {
    if (this.showSnackbarOnClick)
      this._matSnackBar.open(this.showSnackbarOnClick);
    else {
      this._matSnackBar.open('Just a simple snackbar');
    }
  }
}
