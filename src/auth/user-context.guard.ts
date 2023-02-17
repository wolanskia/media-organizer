import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

import { SessionService } from './session.service';

@Injectable()
export class UserContextGuard implements CanActivate {
  constructor(private session: SessionService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (route.params && route.params['code']) {
      this.session.authCode = route.params['code'];
      return true;
    }

    return false;
  }
}
