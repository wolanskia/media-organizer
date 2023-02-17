import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private _authorizationCode = '';

  get authCode() {
    return this._authorizationCode;
  }

  set authCode(code: string) {
    debugger;
    console.log(`auth code: ${code}`);
    this._authorizationCode = code;
  }
}
