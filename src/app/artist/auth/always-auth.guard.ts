import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IsLoginService } from '../isLoginServ/is-login.service';

@Injectable({
  providedIn: 'root'
})
export class AlwaysAuthGuard implements CanActivate {
  constructor(private isLoginServ: IsLoginService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isLoginServ.isLogin()) {
      return true;
    }
    this.router.navigate(['/search']);
    console.log(next);
    return false;
  }
}
