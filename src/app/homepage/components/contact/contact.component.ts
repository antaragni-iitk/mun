import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UiService} from '@services/ui.service';
import {ContentService} from '../../../services/content.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('services')
  public services;
  text;

  team = [
    {name: 'Varad Sharma', post: 'Manager, MUN', number: '9452838366', mail: 'mun@antaragni.in', fb: 'https://www.facebook.com/varad.sharma.1', gmail: 'varadsharma1998@gmail.com', linked_in: 'https://www.linkedin.com/in/varad-sharma-021b29165', img: 'https://drive.google.com/uc?export=view&id=18riXUxIAFbi5PV0h2tJOiEuuEs-y90Bn'},
    {name: 'Abhishek Gupta', post: 'Manager, MUN', number: '9068885460', mail: 'mun@antaragni.in', fb: 'https://www.facebook.com/abhishek.gupta.144734', gmail: 'gup.abhi1998@gmail.com', linked_in: 'https://www.linkedin.com/in/abhishek-gupta-562396145', img: 'https://drive.google.com/uc?export=view&id=1GYxAQjQYyisZ4kZh5LjTdZVRq4DJdel3'},
    {name: 'Aditya Gupta', post: 'Manager, MUN', number: '8839996820', mail: 'mun@antaragni.in', fb: 'https://www.facebook.com/people/Aditya-Gupta/100017592185598', gmail: 'gaditya387@gmail.com', linked_in: 'https://www.linkedin.com/in/aditya-gupta-b87a11151', img: 'https://drive.google.com/uc?export=view&id=1Q2FPk-Hic3NbGIIKTXCITfQF1YntxdwL'},
  ]

  constructor(private ui: UiService, private ares: ContentService) {
  }

  ngOnInit() {
  }
}
