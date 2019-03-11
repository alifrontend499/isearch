import { Component, OnInit } from '@angular/core';
import { AuthService } from './firebase/auth.service';
import * as $ from 'jquery';
import { auth } from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'isearch';
  msg: string;
  isLogin: boolean = true;
  constructor(private auth: AuthService) { }

  logout() {
    this.auth.logout();
  };
  ngOnInit() {
    // this.auth.checkUser().subscribe(user => {
    //   if(user !== null) {
    //     this.isLogin == true;
    //   } else {
    //     this.isLogin == false
    //   }
    // })
  }
  // MODAL
  openModal(msg) {
    // $: any;
    // jq("#commonModal").modal("show");
    // this.msg = msg;
  };
}
