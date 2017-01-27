import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from '../../auth/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      // Store the attempted URL for redirecting
      if (this.authService.getRedirectUrl() != undefined && !this.authService.getRedirectUrl().match(/\/auth\//)) {
        this.router.navigate([this.authService.getRedirectUrl()]);
      } else {
        this.router.navigate(['/']);
      }
      return false
    }
    return true;
  }
}
