import { MatDialog } from '@angular/material';
import { LetterComponent } from './letter/letter.component';
import { AntaragniComponent } from './antaragni/antaragni.component';
import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {UiService} from '../../../services/ui.service';
import {ContentService} from '../../../services/content.service';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('about') about;

  constructor(private ui: UiService, private ares: ContentService, public dialog: MatDialog) {}

  openDialogAntaragni() {
    let dialogRef = this.dialog.open(AntaragniComponent, {
    });
  }

  openDialogLetter() {
    let dialogRef = this.dialog.open(LetterComponent, {
      height: '80vh',
    });
  }

  ngOnInit() {
    this.ui.goAbout.subscribe(() => this.about.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end'}));
  }
}
