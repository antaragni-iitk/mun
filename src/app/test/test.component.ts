import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../services/payment.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }

  payNow() {
    this.paymentService.showPopup({
      eventcode:   'chandigarh-nationals-antaragni18-314013',
      ticketname1:  'Non IITK',
      ticketvalue1: 1
    });
  }

  ngOnInit() {
  }

}




