import {Component, OnInit} from '@angular/core';
import {FbloginService} from '../../../services/fblogin.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/internal/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public loginService: FbloginService, private router: Router) {
  }

  ngOnInit() {

  }

  onhit() {
    this.loginService.isAuthenticated$.pipe(first()).subscribe(res => res ? this.loginService.signOut() : this.loginService.signin());
  }
}
