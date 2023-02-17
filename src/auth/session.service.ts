import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserSession } from './constants';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private _session = new BehaviorSubject<any>({
    code: '',
    accessToken: '',
    userId: '',
  });

  get userSession() {
    return this._session.getValue();
  }

  setUserSession(session: Partial<UserSession>) {
    this._session.next({
      ...this._session.getValue(),
      ...session,
    });
  }
}
