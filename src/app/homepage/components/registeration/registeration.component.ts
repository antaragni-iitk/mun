import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  registers = [
    {id: 'delegate', url: 'https://drive.google.com/uc?export=view&id=1QIKTkoOMzQ2SRm9hzseAAg7yTfRddPTd', name: 'Delegate', content: `The delegates are there to represent the different countries in the committee, and the country’s views and opinions.The delegation, is during a conference required to have created a position paper before recapping your country’s stance in the issue and background info of the issue, later create a resolution in the conference and also speak in the third person.`},

    
    
    {id: 'executive_board_bmember', url: 'https://drive.google.com/uc?export=view&id=1-jveor0whmVPdybKPUI1ylSizWn-Rbg1', name: 'Executive Board member', content: `The Executive Board of an MUN is comprised of individuals who have been selected after an extensive process of judging their merit and skills, verifying their experience, calculating the dynamics of the entire board with the requirements of the secretariat, only because they are going to be entrusted with one of the biggest tasks in making an MUN Conference successful – to guide their respective councils through debate on the agenda and throughout the debate, to judge the delegates who put in a tremendous effort to rise above the rest in all aspects of being a Delegate.`},

    
    {id: 'international_press', url: 'https://drive.google.com/uc?export=view&id=11LgyESWDxtIm1DOlKoWT3EzYdxHaQm73', name: 'International Press', content: `The job of the international press journalists is to act as unbiased journalists and present the happenings of the UN to the world. You will have to investigate and follow committee debates, edit articles and cover the committees events. As a journalist you are expected to be quirky, sharp and sly. You’re meant to listen to the delegates debating and are allowed to ask questions. The questions put up by the journalists are normally sharp ripping half baked arguments into shreds.`},    
  ]

  constructor(public dialog: MatDialog) {}

  openDialog(committee: any) {
    let dialogRef = this.dialog.open(RegisterDialogComponent, {
      data: committee,
    });
    // console.log(committee)

  }

  ngOnInit() {
  }

}
