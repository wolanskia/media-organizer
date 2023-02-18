import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { clientId, redirectUri, UserSession } from './constants';

@Injectable({ providedIn: 'root' })
export class IgOAuthService {
  constructor(private http: HttpClient) {}

  async getAccessToken(authCode: string): Promise<UserSession> {
    const body = {
      client_id: clientId,
      client_secret: '7f42852a3ea0d244d9109d60c0c381b2',
      code: authCode,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    };

    const formData = new FormData();
    formData.append('client_id', `${body.client_id}`);
    formData.append('client_secret', body.client_secret);
    formData.append('code', authCode);
    formData.append('grant_type', body.grant_type);
    formData.append('redirect_uri', redirectUri);

    const response = await fetch(
      `https://api.instagram.com/oauth/access_token`,
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body), // body data type must match "Content-Type" header
      }
    );

    return response.json();
    // return this.http
    //   .post<{ access_token: string; user_id: string }>(
    //     'api/oauth/access_token',
    //     {
    //       client_id: clientId,
    //       client_secret: '7f42852a3ea0d244d9109d60c0c381b2',
    //       code: authCode,
    //       grant_type: 'authorization_code',
    //       redirect_uri: redirectUri,
    //     }
    //   )
    //   .pipe(
    //     map((response) => ({
    //       code: authCode,
    //       accessToken: response['access_token'],
    //       userId: response['user_id'],
    //     }))
    //   );
  }
}
