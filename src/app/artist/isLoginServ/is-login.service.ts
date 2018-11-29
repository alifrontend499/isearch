import { Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoginService {

  constructor() { }
  @ViewChild('isLoginUser') isLoginUser: boolean = false;

  isLogin(): boolean {
    if (this.isLoginUser) {
      return true;
    }
    return false;
  }
}
