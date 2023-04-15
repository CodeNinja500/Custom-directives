import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lowgular-acms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dialogTest(Event: Boolean): void {
    console.log(Event);
  }

  public readonly form: FormControl = new FormControl('');
  public readonly telForm: FormControl = new FormControl('');
}
