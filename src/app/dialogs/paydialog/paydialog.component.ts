import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-paydialog',
  templateUrl: './paydialog.component.html',
  styleUrls: ['./paydialog.component.css']
})
export class PaydialogComponent implements OnInit {
  collegeIndex = 2;
  colleges = ['IITK MUN, Antaragni\'18 (IITK Students)', 'IITK MUN, Antaragni\'18'];

  constructor() {
  }

  ngOnInit() {
  }

}
