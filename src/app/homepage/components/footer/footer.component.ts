import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  links = [
    {name: 'facebook', class:'fab fa-facebook-f'},
    {name: 'youtube', class:'fab fa-youtube'},
    {name: 'instagram', class:'fab fa-instagram'},
    {name: 'linked_in', class:'fab fa-linkedin-in'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
