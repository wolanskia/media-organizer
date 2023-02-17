import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SessionService } from 'src/auth/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css'],
})
export class AppComponent {
  constructor(
    private location: Location,
    private sessionService: SessionService
  ) {}

  authorizeWindowUrl = `https://api.instagram.com/oauth/authorize?client_id=1861484840866990&redirect_uri=https://oddwoods.netlify.app/auth&response_type=code&scope=user_profile,user_media`;

  ngOnInit() {
    if (!this.sessionService.authCode) {
      window.location.replace(this.authorizeWindowUrl);
    }
  }
}
