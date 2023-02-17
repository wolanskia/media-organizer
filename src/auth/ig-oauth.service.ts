import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { clientId, redirectUri, UserSession } from './constants';
import { SessionService } from './session.service';

@Injectable({ providedIn: 'root' })
export class IgOAuthService {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  getAccessToken(authCode: string) {
    return this.http
      .post<{ access_token: string; user_id: string }>(
        'api/oauth/access_token',
        {
          client_id: clientId,
          client_secret: '7f42852a3ea0d244d9109d60c0c381b2',
          code: authCode,
          grant_type: 'authorization_code',
          redirect_uri: redirectUri,
        }
      )
      .subscribe((response) =>
        this.sessionService.setUserSession({
          accessToken: response['access_token'],
          userId: response['user_id'],
        })
      );
  }
}
