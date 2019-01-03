import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loading: boolean = false;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signup(logForm: FormControl) {
    if (logForm.value.email && logForm.value.f_name && logForm.value.password) {
      this.loading = true;
      this.auth.signup(logForm.value.f_name, logForm.value.l_name, logForm.value.email, logForm.value.password).subscribe(res => {
        console.log(res);
        this.loading = false;
        alert("Signup successfull. Redirecting to login page");
        this.router.navigate(['login']);
      });

      // this.auth.signup(logForm.value.f_name, logForm.value.l_name, logForm.value.email, logForm.value.password);

    } else {
      alert("Please fill all the fields.")
    }
  }

}
