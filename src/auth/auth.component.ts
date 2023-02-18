import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, filter, of, Subject, switchMap, takeUntil } from 'rxjs';
import { clientId, redirectUri } from './constants';
import { IgOAuthService } from './ig-oauth.service';
import { SessionService } from './session.service';

@Component({
  selector: 'auth',
  template: ``,
})
export class AuthComponent {
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService,
    private authService: IgOAuthService
  ) {}

  authorizeWindowUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=user_profile,user_media`;

  ngOnInit() {
    this.route.queryParams
      .pipe(
        takeUntil(this.destroy$),
        switchMap((params: Params) =>
          this.authService.getAccessToken(`${params['code']}#_`)
        ),
        catchError((error) => {
          console.log(error);
          throw error;
        })
      )
      .subscribe(
        (session) => {
          this.sessionService.setUserSession(session);
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        (error) => console.log(error)
      );

    this.route.queryParams
      .pipe(
        filter((params) => !params['code']),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        window.location.replace(this.authorizeWindowUrl);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
