import { Injectable, ViewChild, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedinService {
  // @ViewChild('isLoggedIn') isLoggedIn: boolean = false;
  isLoggedIn: boolean = false;
  constructor() { }

  changeIsLoggedIn(val: boolean): void {
    this.isLoggedIn = val;
  }
}
