import { CommitteeComponent } from './committee/committee.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})
export class CommitteesComponent implements OnInit {
  committees = [
    {name: 'UNHRC', img: 'https://drive.google.com/uc?export=view&id=1eV2mUbQrh2IdBATn2fdMeGF5iEhqoQxU', content: [
      'The United Nations Human Rights Council, replacing the former United Nations Human Rights Commission, is an inter-governmental body within the United Nations framework with 47 member-States. It is responsible for the promotion and protection of all human rights on a global scale. It was established in 2006, and its Seat is at theUN offices at Geneva, Switzerland. As Ban Ki-moon stated, “all victims of human rights abuses should be able to look to the Human Rights Council as a forum and a springboard for action.” The council works closely with the Office of the High Commissioner for human rights.',
      'UNHRC deals with topics that revolve around human rights violations. UNHRC abides by the many different human rights conventions. UNHRC employs special rapporteurs and working groups to keep states in check. These special rapporteurs and working groups investigate and intervene in individual cases and emergency human rights cases. These special rapporteurs create reports that are then published for the global community to view.',
    ]},
    {name: 'UNESCO', img: 'https://drive.google.com/uc?export=view&id=1kKXepNmHOWIrb8DtrX1Xc8OUsQ515laq', content: [
      'UNESCO, The United Nations Educational, Scientific, and Cultural Organization gathers 195 member states and nine associate members. Prominent as the ‘‘intellectual agency of the UN’’ and founded in 1945, UNESCO today has its Headquarters in Paris open to the public with the flamboyant event calendar. UNESCO was founded under the flag of establishing humanity’s moral and intellectual solidarity after two unthinkably devastating World Wars. In today’s globalized and technologically advanced world UNESCO builds moral and intellectual solidarity throughout these activities:',
      '‘‘Mobilizing for education: so that every child, boy or girl, has access to quality education as a fundamental human right and as a prerequisite for human development.',
      'Building intercultural understanding: through the protection of heritage and support for cultural diversity. UNESCO created the idea of World Heritage to protect sites of outstanding universal value.',
      'Pursuing scientific cooperation: such as early warning systems for tsunamis or trans-boundary water management agreements, to strengthen ties between nations and societies.',
      'Protecting freedom of expression: an essential condition for democracy, development and human dignity.’’',
    ]},
    {name: 'UNGA DISEC', img: 'https://drive.google.com/uc?export=view&id=1Dap13iBs01dmhs69v7iRU6sClpS0apHv', content: [
      'The General Assembly (GA) was established under Chapter IV of the United Nations (UN) Charter. Since the General Assembly is the main organ of the United Nations and has representation from every UN member state, it can discuss a wide variety of world issues. As a result of the extensive spectrum of topics discussed by the UN, the General Assembly is made up of six different committees. Disarmament and International Security (DISEC) committee is one of them.',
      'In light of the events in Hiroshima and Nagasaki, the first resolution by DISEC was created in 1946 to address international concerns for the “Establishment of a Commission to Deal with the Problems Raised by the Discovery of Atomic Energy.”',
      'DISEC deals with topics that center around disarmament, global issues, and threats to peace that jeopardize international security. Under Article 11 of Chapter IV of the UN Charter, “The General Assembly may consider the general principles of co-operation in the maintenance of international peace and security, including the principles governing disarmament and the regulation of armament.”',
    ]},
    {name: 'ECOSOC', img: 'https://drive.google.com/uc?export=view&id=1uScwPXjurgG_X0ZhLBcubazyS5gFDTCb', content: [
      'The Economic and Social Council (ECOSOC), under the overall authority of the General Assembly, coordinates the economic and social work of the United Nations and the UN family of organizations. As the central forum for discussing international economic and social issues and for formulating policy recommendations, the Council plays a key role in fostering international cooperation for development. It also consults with non-governmental organizations (NGOs), thereby maintaining a vital link between the United Nations and civil society. It meets throughout the year and holds a major session in July, during which a high-level meeting of Ministers discusses major economic, social and humanitarian issues.',
      'The work of ECOSOC involves so many issues it has many commissions to help it. Some are known as functional commissions. They meet regularly and report back to it on such issues as human rights, social development, the status of women, crime prevention, narcotic drugs, and science and technology.',
    ]},
    {name: 'LOK SABHA', img: 'https://drive.google.com/uc?export=view&id=1zSCGnVtDh5n3d3mTrdDG-N0tgf5_JtdX', content: [
      'The Lok Sabha or House of the People is the lower house of the Parliament of India. The Lok Sabha meets in the Lok Sabha Chambers, Sansad Bhavan, Sansad Marg, New Delhi. Lok Sabha is composed of representatives of the people chosen by direct election on the basis of adult suffrage. The maximum strength of the House envisaged by the Constitution of India is 552. The total elective membership is distributed among the States in such a way that the ratio between the number of seats allotted to each State and the population of the State is, so far as practicable, the same for all States. Lok Sabha, unless sooner dissolved, continues for five years from the date appointed for its first meeting and the expiration of the period of five years operates as a dissolution of the House. However, while a proclamation of emergency is in operation, this period may be extended. It has various legislative, financial, and constitutional purposes.',
    ]},
    {name: 'WTO', img: 'https://drive.google.com/uc?export=view&id=1TY4zpDO_7UoWs-u04z-du7KoGti794cw', content: [
      'The World Trade Organization (WTO) stands as the only global organization has legal and organizational powers on international trade. WTO headquarters is located in Geneva and has been active since 1995. The core of the organization is built up by the WTO agreements which direct the world’s trading system. WTO aims to assist all actors of the International ranging from the producers, exporters, and importers.',
      'WTO has a multidimensional range of activity, serves as a platform for trade opening, a forum where trade negotiations held by governments. It is an ultimate decision organ on to settlement of the trade disputes and a place where the nations have a chance to solve their trading problems. WTO skeleton was built on the concept of negotiation, as it was seen in the Uruguay Rounds which host the birth of the organization. WTO aims to raise the independence of the worldwide trade. Hence it focused to abolish the trade barriers, lowering the trade tariffs and abrogate any restrictive trade measures.',
    ]},
  ];
  constructor(public dialog: MatDialog) {}
  mobile: boolean = window.screen.width < 1024;

  openDialog(committee: any) {
    const dialogRef = this.dialog.open(CommitteeComponent, {
      data: committee,
    });
    // console.log(committee)

  }

  @ViewChild('two') two;

  scrollDown() {
    this.two.nativeElement.scrollIntoView({behavior: 'smooth'});
  }


  ngOnInit() {
  }

}
