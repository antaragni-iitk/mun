import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UiService} from '@services/ui.service';
import {ContentService} from '@services/content.service';
import {map, tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs = [
    {question: 'Q. What is Model United Nations?', answer: 'Model United Nations (also Model UN or MUN) is an academic simulation of the United Nations that aims to educate and encourage participants to discuss about major issues concerning the world, topics in international relations, diplomacy and the United Nations agenda.'},
    {question: 'Q. What are the dates of IITK MUN?', answer: 'IITK MUN, is a three day conference and will be held from 12th-14th October 2018.'},
    {question: 'Q. Who can register for IITK MUN?', answer: 'All students with a valid ID card of their high school or college can register for IITK MUN.'},
    {question: 'Q. When will the registrations for delegates start?', answer: 'The registrations will be released very soon. Follow our Facebook page(Link this to our fb page) to stay updated!'},
    {question: 'Q. What awards will be provided at IITK MUN 2018?', answer: 'The awards will be presented at the discretion of the chairs of each committee and will include 1 Best Delegate and 1 Honorable Mentions/High Commendations. A Best Delegation award will also be provided, and 1 award to the best International Ambassador at the discretion of the Secretary General and the Organizing committee.'},
  ];

  len = this.faqs.length;

  constructor(private ares: ContentService) {
  }

  ngOnInit() {
  }
}
