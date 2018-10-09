import { PaymentService } from '@services/payment.service';
import {RegisterationComponent} from './../registeration.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FbloginService} from '@services/fblogin.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {first} from 'rxjs/internal/operators';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(private afs: AngularFirestore,
              public dialogRef: MatDialogRef<RegisterationComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              public loginService: FbloginService, private router: Router,
              private paymentService: PaymentService) {
  }

  ngOnInit() {
  }

  closedialog() {
    this.dialogRef.close();
  }

  // onhit() {
  //   this.afs.collection('/test').valueChanges().subscribe(() =>
  //     this.loginService.isAuthenticated$.pipe(first()).subscribe(res =>
  //       res ? this.router.navigateByUrl('/dashboard') : this.loginService.signin()));
  // }

  paynow() {
    this.paymentService.showPopup({
      eventcode: 'mun-antaragni18-313203',
    });
  }
}
