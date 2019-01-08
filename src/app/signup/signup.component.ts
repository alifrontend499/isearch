import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AuthService } from '../Auth/auth.service';
import { FirestoreService } from '../firestore/firestore.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loading: boolean = false;
  constructor(private auth: AuthService, private router: Router, private firestore: FirestoreService) { }

  ngOnInit() {

  }

  signup(logForm: FormControl) {
    // checking existing user
    if (logForm.value.email) {
      this.loading = true;
      this.firestore.user_login(logForm.value.email).subscribe(res => {
        if (res.length == 1) {
          this.loading = false;
          console.log(`User with the email ${res[0]['payload'].doc.data().email} already exists.`);
          alert(`User with the email ${res[0]['payload'].doc.data().email} already exists.`);
          return false;
        } else {
          if (logForm.value.email && logForm.value.f_name && logForm.value.password) {
            this.loading = false;
            console.log(this.firestore.user_signup(logForm.value.email, logForm.value.f_name, logForm.value.l_name, logForm.value.password));
            return false;
          }
        }
      })

    }
  }




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
