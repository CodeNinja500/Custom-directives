import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Directive({ selector: '[confirmDialog]' })
export class ConfirmDialogDirective {
  constructor(private _dialog: MatDialog) {}

  @Input() confirmDialog: string = '';
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('click')
  handleClick() {
    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: this.confirmDialog },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.confirmed.emit(result);
    });
  }
}
