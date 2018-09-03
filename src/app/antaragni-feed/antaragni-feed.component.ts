import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

interface IAlert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-antaragni-feed',
  templateUrl: './antaragni-feed.component.html',
  styleUrls: ['./antaragni-feed.component.css'],
})
export class AntaragniFeedComponent implements OnInit {
  message = new Subject<string>();
  feeds: any;
  alert: IAlert = {
    type: 'success',
    message: null
  };

  constructor() {
  }

  ngOnInit() {
    // this.feeds = this.feedService.getAllPosts();
  }

}
