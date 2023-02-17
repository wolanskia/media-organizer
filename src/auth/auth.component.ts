import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { clientId, redirectUri } from './constants';
import { IgOAuthService } from './ig-oauth.service';
import { SessionService } from './session.service';

@Component({
  selector: 'auth',
  template: ``,
})
export class AuthComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService,
    private authService: IgOAuthService
  ) {}

  authorizeWindowUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=user_profile,user_media`;

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.authService
        .getAccessToken(params['code'])
        .subscribe((session) => this.sessionService.setUserSession(session));
    });

    if (!this.sessionService.userSession.accessToken) {
      window.location.replace(this.authorizeWindowUrl);
    } else {
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }
}
