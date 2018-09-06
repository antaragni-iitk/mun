import { Link } from './../../../dashboard/models/link';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  mobile: boolean = window.screen.width < 1024;

  inView = 0;

  links = [
    {name: 'Home', id: 'home', class: 'fa fa-home'},
    {name: 'About', id: 'about', class: 'fas fa-info'},
    {name: 'Committees', id: 'committees', class: 'fas fa-male'},
    {name: 'Resources', id: 'resources', class: 'fas fa-bookmark'},
    {name: 'Registration', id: 'registeration', class: 'fas fa-book-open'},
    // {name: 'Ambassadors', id: 'ambassadors', class: 'fa fa-home'},
    {name: 'FAQ', id: 'faq', class: 'fas fa-question-circle'},
    {name: 'Contact Us', id: 'contact', class: 'fas fa-phone'},
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
  scrollto(i: number) {
    if (i == 0) {
      this.home.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
    if (i == 1) {
      this.about.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
    if (i == 2) {
      this.committees.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
    if (i == 3) {
      this.resources.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
    if (i == 4) {
      if (this.mobile) {
        this.registeration.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
      } else {
        this.registeration.nativeElement.scrollIntoView({behavior: 'smooth'});
      }
    }
    if (i == 5) {
      if (this.mobile) {
        this.faq.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
      } else {
        this.faq.nativeElement.scrollIntoView({behavior: 'smooth'});
      }
    }
    if (i == 6) {
      if (this.mobile) {
        this.contact.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
      } else {
        this.contact.nativeElement.scrollIntoView({behavior: 'smooth'});
      }
    }
  }

  ngOnInit() {
  }
  scrollSpy($event) {
    if ($event.srcElement.scrollTop <= window.screen.height / 2) { this.inView = 0; }
    if (($event.srcElement.scrollTop <= (window.screen.height * 3 / 2)) && ($event.srcElement.scrollTop > (window.screen.height / 2))) { this.inView = 1; }
    if (this.mobile) {
      if (($event.srcElement.scrollTop <= (window.screen.height * 38 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 3 / 2))) { this.inView = 2; }
      if (($event.srcElement.scrollTop <= (window.screen.height * 47 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 38 / 10))) { this.inView = 3; }
      if (($event.srcElement.scrollTop <= (window.screen.height * 62 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 47 / 10))) { this.inView = 4; }
      if (($event.srcElement.scrollTop <= (window.screen.height * 74 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 62 / 10))) { this.inView = 5; }
      if (($event.srcElement.scrollTop > (window.screen.height * 74 / 10))) { this.inView = 6; }
    } else {
      if (($event.srcElement.scrollTop <= (window.screen.height * 32 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 3 / 2))) { this.inView = 2; }
      if (($event.srcElement.scrollTop <= (window.screen.height * 39 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 32 / 10))) { this.inView = 3; }
      if (($event.srcElement.scrollTop <= (window.screen.height * 48 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 39 / 10))) { this.inView = 4; }
      if (($event.srcElement.scrollTop <= (window.screen.height * 11 / 2)) && ($event.srcElement.scrollTop > (window.screen.height * 48 / 10))) { this.inView = 5; }
      if (($event.srcElement.scrollTop > (window.screen.height * 11 / 2))) { this.inView = 6; }
    }
  }
}
