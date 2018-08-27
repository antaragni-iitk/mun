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
  faq = [
    {question: 'Q. What is Model United Nations?', answer: 'Model United Nations (also Model UN or MUN) is an academic simulation of the United Nations that aims to educate and encourage participants to discuss about major issues concerning the world, topics in international relations, diplomacy and the United Nations agenda.'},
    {question: 'Q. What are the dates of Techfest World MUN?', answer: 'IITK MUN, is a three day conference and will be held from 5th-7th October 2018'},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
  ]

  constructor(private ares: ContentService) {
  }

  ngOnInit() {
  }
}
