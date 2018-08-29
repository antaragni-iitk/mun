import { Injectable } from '@angular/core';
import { ScriptService } from './script.service';

declare function popupWithAutoFill(any);

@Injectable({
  providedIn: 'root',
})
export class PaymentService {

  waitPromise: Promise<any>;

  constructor(private scriptService: ScriptService) {
    this.waitPromise = scriptService.loadScript('townscript');
  }

  showPopup(data: any) {
    this.waitPromise.then(() => popupWithAutoFill(data));
  }

}
