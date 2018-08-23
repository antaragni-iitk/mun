import { RegisterationComponent } from './../registeration.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegisterationComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }

}
