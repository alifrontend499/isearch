import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, of, Observable } from 'rxjs';
import { ErrorHandler } from '@angular/router/src/router';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: AngularFireAuth) { }

  signUp() {
    from(this.auth.auth.createUserWithEmailAndPassword("ali@myl.co.in", "123456")).pipe(catchError(err => {
      this.signupErrorHandler(err);
      return of(err);
    })).subscribe(res => {
      console.log(res);
    })
  }

  checkUser(): boolean {
    let mainUser: boolean;
    // this.auth.user.subscribe(user => {
    //   if (user == null) {
    //     mainUser = false;
    //   } else {
    //     mainUser = true;
    //   }
    // })
    return true;
  }

  temp() {
    
  }

  signupErrorHandler(err: HttpErrorResponse) {
    console.log(err.message);
  }

  logout() {
    this.auth.auth.signOut();
  }
}
