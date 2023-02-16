import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css'],
})
export class AppComponent {
  authorizeWindowUrl = `https://api.instagram.com/oauth/authorize
    ?client_id=1861484840866990,
    &redirect_uri=https://oddwoods.netlify.app/auth/,
    &response_type=code,
    &scope=user_profile,user_media`;
}
