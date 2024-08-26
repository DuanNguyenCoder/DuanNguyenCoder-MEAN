import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor() {}

  themeService = new BehaviorSubject<boolean>(false);
  totalBillService = new BehaviorSubject<number>(0);
}
