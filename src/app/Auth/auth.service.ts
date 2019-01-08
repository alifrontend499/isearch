import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../modal/Users';
// import { jwt } from './temp';
import { secret } from '../Auth/secretkey/secret.key'
import { jsonwebtoken } from 'jsonwebtoken'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  JWT: jsonwebtoken.jwt;
  signupApi: string = "http://localhost:3000/userdata";
  constructor(private http: HttpClient) { }

  createJwt(user: Object) {
    if (user) {
      let payload = {
        subject: user
      }
      console.log("token");
      // let token = this.JWT.sign(payload, secret);
    }
  }

  signup(f_name: string, l_name: string, email: string, pass: string) {
    return this.http.post<Users>(this.signupApi, {
      "firstName": f_name.toLowerCase(),
      "lastName": l_name.toLowerCase(),
      "email": email,
      "password": pass,
    }, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      });
  }
}
