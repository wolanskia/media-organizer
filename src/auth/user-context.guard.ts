import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { SessionService } from './session.service';

@Injectable()
export class UserContextGuard implements CanActivate {
  constructor(private session: SessionService, private router: Router) {}
  canActivate(): boolean | UrlTree {
    if (this.session.authCode) {
      return true;
    }

    return this.router.createUrlTree(['/auth']);
  }
}
