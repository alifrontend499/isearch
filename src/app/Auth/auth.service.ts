import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../modal/Users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signupApi: string = "http://localhost:3000/userdata";
  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    // return this.http.post<User>('/api/login', { email, password }).pipe(shareReplay())

  }

  signup(f_name: string, l_name: string, email: string, pass: string) {
    return this.http.post<Users>(this.signupApi, {
      "firstName": f_name,
      "lastName": l_name,
      "email": email,
      "password": pass,
    }, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    })
  }
}
