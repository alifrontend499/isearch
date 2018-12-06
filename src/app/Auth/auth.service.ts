import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(email: string, password: string) {
    // return this.http.post<User>('/api/login', { email, password }).pipe(shareReplay())

  }
}
