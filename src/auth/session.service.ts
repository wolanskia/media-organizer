import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private _authorizationCode = '';

  get authCode() {
    return this._authorizationCode;
  }

  set authCode(code: string) {
    this._authorizationCode = code;
  }
}
