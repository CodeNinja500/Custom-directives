import { Directive, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Directive({ selector: '[confirmDialog]' })
export class ConfirmDialogDirective {
  constructor(private _dialog: MatDialog) {}

  @Input() message: string = '';
}
