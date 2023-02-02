import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss'],
})
export class CookieComponent implements OnInit {
  name!:null;
  cookieValue = '';
  isCookieExist= false;
  constructor(private cookieService: CookieService) {}
  ngOnInit(): void {}
  setItem(value: any) {
    this.cookieService.set('name', value);
  }
  getItem() {
    this.cookieValue = this.cookieService.get('name');
  }
  clearItem() {
    this.cookieService.delete('name');
  }
  clearAll() {
    this.cookieService.deleteAll();
  }
  checkNameCookie() {
    this.isCookieExist = this.cookieService.check('name');
  }
}
