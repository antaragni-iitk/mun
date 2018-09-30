import {Component, Input, OnInit} from '@angular/core';
import {PaymentService} from '../services/payment.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() link = 'IITK MUN, Antaragni\'18';
  constructor(private paymentService: PaymentService) { }

  payNow() {
    this.paymentService.showPopup({
      eventcode:   'mun-antaragni18-313203',
      ticketname1:  "IITK MUN, Antaragni'18 (IITK Students)",
      ticketvalue1: 1
    });
  }

  ngOnInit() {
  }

}




