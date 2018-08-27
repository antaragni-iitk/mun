import { Link } from './../../../dashboard/models/link';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  mobile: boolean = window.screen.width < 1024;

  links: Link[] = [
    {name: 'Home', id: 'home', class: 'fa fa-home'},
    {name: 'About', id: 'about', class: 'fa fa-home'},
    {name: 'Committees', id: 'committees', class: 'fa fa-home'},
    {name: 'Resources', id: 'resources', class: 'fa fa-home'},
    {name: 'Registeration', id: 'registeration', class: 'fa fa-home'},
    // {name: 'Ambassadors', id: 'ambassadors', class: 'fa fa-home'},
    {name: 'FAQ', id: 'faq', class: 'fa fa-home'},
    {name: 'Contact Us', id: 'contact', class: 'fa fa-home'},
  ];
  @ViewChild('resources') resources;
  @ViewChild('about') about;
  @ViewChild('home') home;
  @ViewChild('registeration') registeration;
  @ViewChild('committees') committees;
  @ViewChild('contact') contact;
  @ViewChild('faq') faq;
  
  
  constructor() { 
  }
  scrollto(i: number){
    if(i == 0)
      this.home.nativeElement.scrollIntoView({behavior: "smooth"});
    if(i == 1)
      this.about.nativeElement.scrollIntoView({behavior: "smooth"});
    if(i == 2)
      this.committees.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
    if(i == 3)
      this.resources.nativeElement.scrollIntoView({behavior: "smooth"});
    if(i == 4)
      this.registeration.nativeElement.scrollIntoView({behavior: "smooth"});
    if(i == 5)
      this.faq.nativeElement.scrollIntoView({behavior: "smooth"});
    if(i == 6)
      this.contact.nativeElement.scrollIntoView({behavior: "smooth"});
  }

  ngOnInit() {
  }

}
