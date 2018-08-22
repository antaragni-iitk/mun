import { Link } from './../../../dashboard/models/link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
