import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IsLoggedinService } from './is-loggedin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private isLoggedIn: IsLoggedinService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('userLoginDetails') !== null) {
      this.isLoggedIn.changeIsLoggedIn(true);
      return true;
    }
    alert('Please login first.');
    this.router.navigate(["login"]);
    return false;
  }
}
