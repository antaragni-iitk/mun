import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {UiService} from '@services/ui.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, private ui: UiService) {
  }

  exploresite() {
    this.dialogRef.close();
    setTimeout(() => this.ui.sidenav2.next(true), 300);
  }

  ngOnInit() {
  }

}
