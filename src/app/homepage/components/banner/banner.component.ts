import {Component, OnInit} from '@angular/core';
import {FbloginService} from '../../../services/fblogin.service';
import {first} from 'rxjs/internal/operators';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public loginService: FbloginService, private afs: AngularFirestore) {
  }

  ngOnInit() {

  }

  onhit() {
    this.loginService.isAuthenticated$.pipe(first()).subscribe(res => res ? this.loginService.signOut() : this.loginService.signin());
  }
}
