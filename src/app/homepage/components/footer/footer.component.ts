import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  links = [
    {name: 'facebook', class: 'fab fa-facebook-f', url: 'https://www.facebook.com/antaragni.iitk/'},
    {name: 'youtube', class: 'fab fa-youtube', url: 'https://www.youtube.com/user/antaragniiitkanpur/'},
    {name: 'instagram', class: 'fab fa-instagram', url: 'https://www.instagram.com/antaragni_iitk/'},
    {name: 'linked_in', class: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/company/antaragni-iit-kanpur/'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
