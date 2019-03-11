import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../firebase/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckuserGuard implements CanActivate {
  constructor(private auth: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.checkUser()) {
      return true;
    }
    return false;
  }
}
