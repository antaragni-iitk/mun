import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-wait-spinner',
  templateUrl: './wait-spinner.component.html',
  styleUrls: ['./wait-spinner.component.css']
})
export class WaitSpinnerComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }
}
