import { Component, OnInit } from '@angular/core';
import { IsLoggedinService } from '../authGuard/is-loggedin.service';
import { AuthService } from '../Auth/auth.service';
import { NgForm, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // email: string = "ali@gmail.com";
  // password: string = "123456";
  constructor(private isLoggedIn: IsLoggedinService, private router: Router, private authService: AuthService) { }
  loginForm: Form;
  ngOnInit() {
    // console.log("login comp " + this.isLoggedIn.isLoggedIn);

    // console.log(this.authService.login("Ali", "123456"));
  }

  // checkUser(fm: NgForm): void {
  //   if (this.email == fm.value.email && this.password == fm.value.password) {
  //     if (typeof (Storage) !== "undefined") {
  //       let userdata: string = fm.value;
  //       localStorage.setItem("userLoginDetails", userdata);
  //       this.isLoggedIn.changeIsLoggedIn(true);
  //       this.router.navigate(["search"]);
  //     }
  //   } else {
  //     alert("Email Or password is wrong");
  //   }
  // }


}
