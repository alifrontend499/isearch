import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signup(logForm: FormControl) {
    if (logForm.value.email && logForm.value.f_name && logForm.value.password) {
      this.auth.signup(logForm.value.f_name, logForm.value.l_name, logForm.value.email, logForm.value.password);
    } else {
      alert("Please fill all the fields.")
    }
  }

}
