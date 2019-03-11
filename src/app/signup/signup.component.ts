import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AuthService } from '../firebase/auth.service';
import { FirestoreService } from '../firebase/firestore.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loading: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private firestore: FirestoreService
  ) {}

  ngOnInit() {
    // this.authService.signUp();
    // this.authService.checkUserLogin()
  }

  // SIGNUP WITH FIREBASE AUTHENTICATION
  signup(signupform: FormControl) {
    if (signupform.value.f_name && signupform.value.email && signupform.value.password) {
      console.log(signupform.value);
    } else {
      console.log("Please enter email and password");
    }
  }

  // CHECKING EXISTING USER WITH FIRESTORE
  // signup(logForm: FormControl) {
  //   if (logForm.value.email) {
  //     this.loading = true;
  //     this.firestore.user_login(logForm.value.email).subscribe(res => {
  //       if (res.length == 1) {
  //         this.loading = false;
  //         console.log(`User with the email ${res[0]['payload'].doc.data().email} already exists.`);
  //         alert(`User with the email ${res[0]['payload'].doc.data().email} already exists.`);
  //         return false;
  //       } else {
  //         if (logForm.value.email && logForm.value.f_name && logForm.value.password) {
  //           this.loading = false;
  //           console.log(this.firestore.user_signup(logForm.value.email, logForm.value.f_name, logForm.value.l_name, logForm.value.password));
  //           return false;
  //         }
  //       }
  //     })
  //   }
  // }

  // signup(logForm: FormControl) {
  //   if (logForm.value.email && logForm.value.f_name && logForm.value.password) {
  //     this.loading = true;
  //     this.auth.signup(logForm.value.f_name, logForm.value.l_name, logForm.value.email, logForm.value.password).subscribe(res => {
  //       console.log(res);
  //       this.loading = false;
  //       alert("Signup successfull. Redirecting to login page");
  //       this.router.navigate(['login']);
  //     });
  //   } else {
  //     alert("Please fill all the fields.")
  //   }
  // }

}
