import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SessionService } from './session.service';

@Component({
  selector: 'auth',
  template: ``,
})
export class AuthComponent {
  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) {}

  authorizeWindowUrl = `https://api.instagram.com/oauth/authorize?client_id=1254574731831152&redirect_uri=https://oddwoods.netlify.app/auth&response_type=code&scope=user_profile,user_media`;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.sessionService.authCode = params['code'];
    });

    if (!this.sessionService.authCode) {
      window.location.replace(this.authorizeWindowUrl);
    }
  }
}
