import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { clientId, redirectUri, UserSession } from './constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class IgOAuthService {
  constructor(private http: HttpClient) {}

  getAccessToken(authCode: string): Observable<UserSession> {
    return this.http.post<UserSession>(`api/auth`, { code: authCode });

    // const body = {
    //   client_id: clientId,
    //   client_secret: '7f42852a3ea0d244d9109d60c0c381b2',
    //   code: authCode,
    //   grant_type: 'authorization_code',
    //   redirect_uri: redirectUri,
    // };

    // const formData = new FormData();
    // formData.append('client_id', `${body.client_id}`);
    // formData.append('client_secret', body.client_secret);
    // formData.append('code', authCode);
    // formData.append('grant_type', body.grant_type);
    // formData.append('redirect_uri', redirectUri);

    // const response = await fetch(
    //   `https://api.instagram.com/oauth/access_token`,
    //   {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'no-cors', // no-cors, *cors, same-origin
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     referrerPolicy: 'strict-origin-when-cross-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //     body: JSON.stringify(body), // body data type must match "Content-Type" header
    //   }
    // );

    // return response.ok ? response.json() : Promise.reject(response.statusText);
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
