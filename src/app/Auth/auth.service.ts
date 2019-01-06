import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../modal/Users';
import { jsonwebtoken } from 'jsonwebtoken';
import { secret } from '../Auth/secretkey/secret.key'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  JWT: jsonwebtoken;
  signupApi: string = "http://localhost:3000/userdata";
  // signupApi: string = "https://my-json-server.typicode.com/alifrontend499/isearch/userdata";
  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    // return this.http.post<User>('/api/login', { email, password }).pipe(shareReplay())
  }

  createJwt(user: Object) {
    if (user) {
      let payload = {
        subject: user
      }
      console.log("token");
      let token = this.JWT.sign(payload, secret);
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
