import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.css']
})
export class CollabComponent implements OnInit {
  mobile: boolean = window.screen.width < 1023;

  constructor() { }

  ngOnInit() {
  }

}
