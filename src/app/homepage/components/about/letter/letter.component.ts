import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  content = [
    'Dear prospective delegates and advisors,',
    'It is with utmost pride that we invite you to the 9th Edition of IITK MUN, that is scheduled to be held from 12th-14th October 2018. As the Secretariat and Executive Board of the conference, we are looking forward to meeting you and seeing you in action as a responsible member of the global community.',
    'The effective working of the United Nations depends on the cooperation and goodwill of its member states. Incorporating each nation’s unique interests and concerns makes it a challenging job to discuss, write and pass resolutions thus demanding creativity and diplomacy in every stage of the process.',
    'The theme for this year’s conference is “Revolution through Resolution”. Today we live in a world that is growing in constraints and divisions at an alarming rate. It is therefore, imperative for us to bring about an innovative change with a plethora of fresh ideas and new outlooks. Every year at the New Year, a large number of people set resolutions for themselves, but rarely see them through. Now in this era where each sunrise brings with itself a different issue to plague the world, It is up to the youth to actually take up the initiative, and be the harbingers of a revolution aimed towards global peace and stability. Our aim is to provide a platform to encourage the delegates to explore new perspectives and different approaches to long-standing issues and conflicts that are often overseen in today’s discussions.',
    'The question of identification followed by dealing with these issues poses a challenge for the delegates attending IITK MUN 2018. We expect the delegates to leave the conference with heightened skills of cooperation and compromise, mutual understanding, appreciation, tactfulness, and confidence.',
    'We are dedicated to making this conference a great learning experience for each and every participant and appeal to you - take the chance and join us, become a part of IITK MUN 2018, get involved, discuss, and make an impact.',
    'We are very much looking forward to IITK MUN 2018, to refocusing and exploring, to challenge both ourselves and the future participants – you!',
    '------------------------',
    'Secretary General',
    'IITK MUN 2018',
  ];

  constructor() { }

  ngOnInit() {
  }

}
