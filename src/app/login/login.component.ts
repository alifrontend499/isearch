import { Component, OnInit } from '@angular/core';
import { IsLoggedinService } from '../authGuard/is-loggedin.service';
// import { AuthService } from '../Auth/auth.service';
import { NgForm, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from '../firestore/firestore.service';
import { User } from '../firestore/model/user.model';
import { AuthService } from '../firebase/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  constructor(
    private isLoggedIn: IsLoggedinService,
    private router: Router,
    private auth: AuthService,
    private firestore: FirestoreService,
  ) { }
  loginForm: Form;
  isAuthenticated: boolean;
  user: User;
  ngOnInit() {
    // this.auth.signUp();
    this.auth.temp();
    // this.auth.logout();
  }



  // WITH FIREBASE FIRESTORE
  // checkUser(fm: NgForm): void {
  //   this.loading = true;
  //   this.firestore.user_login(fm.value.email).subscribe(res => {
  //     if (res.length) {
  //       if (fm.value.email == res[0]['payload'].doc.data()['email'] && fm.value.password == res[0]['payload'].doc.data()['password']) {
  //         this.user = {
  //           id: res[0]['payload'].doc.id,
  //           email: res[0]['payload'].doc.data()['email'],
  //           first_name: res[0]['payload'].doc.data()['first_name'],
  //           last_name: res[0]['payload'].doc.data()['last_name']
  //         }
  //         console.log("User Authenticated");
  //         console.log(this.user);
  //         this.loading = false;
  //       }
  //     } else {
  //       this.loading = false;
  //       alert("email or Password is incorrect");
  //     }
  //   });
  // }

}
