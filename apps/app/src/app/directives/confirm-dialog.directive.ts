import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Directive({ selector: '[confirmDialog]' })
export class ConfirmDialogDirective implements OnInit {
  constructor(private _dialog: MatDialog) {}

  @Input() confirmDialog: string = '';
  @Output() onDialogClosed: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: { message: this.confirmDialog },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.onDialogClosed.emit(result);
    });
  }
}
