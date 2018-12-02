import { Component, OnInit } from '@angular/core';
import { IsLoggedinService } from './authGuard/is-loggedin.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'isearch';
  msg: string;
  isLogin: boolean = this.isLoggedIn.isLoggedIn;
  constructor(private isLoggedIn: IsLoggedinService) { }

  logout() {
    // ev.preventDefault();
    console.log('Logout');
    return false;
  };
  ngOnInit() {
    // this.openModal("Please login first");
    console.log("Home Comp:" + this.isLoggedIn.isLoggedIn);
  }
  // MODAL
  openModal(msg) {
    // $: any;
    // jq("#commonModal").modal("show");
    // this.msg = msg;
  };
}
